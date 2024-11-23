import { createContext, memo, useContext, useState } from "react";

const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);

export const AddressProvider = memo(({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const updateUser = (updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };
    
    return (
        <AddressContext.Provider value={{ user, updateUser }}>
            {children}
        </AddressContext.Provider>
    );
});