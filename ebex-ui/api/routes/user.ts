import { Router, Response } from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import userAuth, { CustomRequest, secret } from "../middleware/user";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = Router();

const userMinSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const userSchema = userMinSchema.extend({
  name: z.string().min(3, "Name must be at least 3 characters"),
  phone: z
    .string()
    .min(10, "Number must be of 10 digits")
    .max(10, "Number must be of 10 digits"),
});

router.get("/", userAuth, (req: CustomRequest, res: Response) => {
  console.log("Hello");
  res.send("Hello");
});

router.post("/signup", async (req: CustomRequest, res: Response) => {
  console.log("signup");
  try {
    let parsedUser = await userSchema.parseAsync(req.body);
    const hashedPass = await bcrypt.hash(parsedUser.password, 10);
    parsedUser = { ...parsedUser, password: hashedPass };

    await prisma.user.create({
      data: parsedUser,
    });
    return res.status(201).send("User created");
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

router.post("/signin", async (req: CustomRequest, res: Response) => {
  console.log("sign in");
  try {
    const parsedUser = await userMinSchema.parseAsync(req.body);

    const user = await prisma.user.findUnique({
      where: { email: parsedUser.email },
    });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const isPasswordValid = await bcrypt.compare(
      parsedUser.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).send("Password is invalid");
    }

    jwt.sign(
      {
        email: parsedUser["email"],
        name: user["name"],
        phone: user["phone"],
        id: user["id"],
      },
      secret,
      (err: Error | null, encoded: String | undefined) => {
        if (err || !encoded) {
          return res.status(500).send();
        }
        return res.status(200).json({ token: encoded });
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

export default router;
