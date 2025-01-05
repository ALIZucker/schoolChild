'use client';
import img from '../../public/img/b1.png'

import React from "react";

const DataContext = React.createContext();

export function DataProvider({ children }) {
    const [isSubmit, setIsSubmit] =React.useState(false);
    const [bascketData, setBascketData] =React.useState([]);

    return (
        <DataContext.Provider value={{ isSubmit,setIsSubmit ,bascketData, setBascketData }}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => React.useContext(DataContext);