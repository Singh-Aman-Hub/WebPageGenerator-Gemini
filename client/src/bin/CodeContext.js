import { createContext,useState,useContext } from "react";

const CodeContext =createContext();
export const useCode=()=>{
    useContext(CodeContext);
};

export const CodeProvider=({children})=>{
    const [code,setCode]=useState('');
    return(
        <CodeContext.Provider value={{code,setCode}}>
            {children}
        </CodeContext.Provider>
    );
};
