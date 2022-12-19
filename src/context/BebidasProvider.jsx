import { useState , useEffect , createContext } from 'react';
import axios from "axios";

const BebidasContext = createContext();

export const BebidasProvider = ({children}) => {
    
   

    return (
        <BebidasContext.Provider
            value={{
                
            }}
        >
            {children}
        </BebidasContext.Provider>
    )

}

export default BebidasContext