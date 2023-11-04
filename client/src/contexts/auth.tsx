import { createContext, useState, useEffect } from "react";

interface IAuthProvider {
  children: React.ReactNode;
}

type Token = string | null;

interface IAuthContext {
  user: Token;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") as string);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
