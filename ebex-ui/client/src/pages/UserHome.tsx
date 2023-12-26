import React from "react";
import { useUser } from "../context/UserContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const UserHome: React.FC = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="mt-36 mx-36">
      <Table>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{user?.id}</TableCell>
            <TableCell>{user?.name}</TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserHome;
