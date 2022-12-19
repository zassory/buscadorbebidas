import { useState , useEffect , createContext } from 'react';

const CategoriasContext = createContext();

export const CategoriasProvider = ({children}) => {


    return (
        <CategoriasContext.Provider
            value={{

            }}
        >
            {children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasContext