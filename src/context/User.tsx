
import React, { createContext, ReactNode, useContext } from 'react';

interface UserContextProps {
    firstName: string;
    lastName: string;
    email: string;
    apPointTotal: number;
    rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}
export const user: UserContextProps = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@johndoe.com',
    apPointTotal: 90,
    rank: 'Bronze',
};

export const UserContext = createContext<UserContextProps>(user);


export function UserContextProvider({
    children,
}: {
    user: UserContextProps;
    children: ReactNode;
}): JSX.Element {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const ctx = useContext(UserContext);
    if (typeof ctx === 'undefined') {
        throw new Error(
            'useUser must be used within the provider.'
        );
    }
    return ctx;
}