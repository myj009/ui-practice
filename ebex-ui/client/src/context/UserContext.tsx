import React, { createContext, useContext, useEffect, useState } from "react";
import * as jwt from "jose";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  email: string;
  name: string;
  phone: string;
  token: string;
};

type UserType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
const UserContext = createContext<UserType>({
  user: null,
  setUser: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const path = window.location.pathname;
    if (!token) {
      if (path !== "/signin" && path !== "/signup" && path !== "/") {
        navigate("/signin");
      }
      return;
    }
    const data = jwt.decodeJwt(token);
    setUser({
      email: String(data.email),
      id: String(data.id),
      token: token,
      name: String(data.name),
      phone: String(data.phone),
    });

    if (path === "/signin" || path === "/signup") {
      navigate("/home");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
