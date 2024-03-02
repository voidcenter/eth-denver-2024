// AuthContext.js
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface User {
    name: string;
    token: string;
}
  
interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<User | null>({name: '', token: ''});
  
    const login = (userData: User) => {
        setUser(userData);
    };
  
    const logout = () => {
        setUser(null);
    };

    const value = { user, login, logout };

    useEffect(() => {
        const accessToken = Cookies.get('jwt');

        if (accessToken) {

        }
    }, []);
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
