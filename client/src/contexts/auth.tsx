import { createContext, useState, useEffect } from "react";

interface IAuthProvider {
    children: React.ReactNode
}

interface IAuthContext {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<null>>
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")!);
        if (storedUser) {
            setUser(user);
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
