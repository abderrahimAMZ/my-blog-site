import React,{useState} from "react";


export const ModeContext = React.createContext([true, () => {} ]);
export const ModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);

    function toggleDarkMode() {
        setDarkMode(lightingMode => !lightingMode)
    }
    return (
        <ModeContext.Provider value={[darkMode, toggleDarkMode]}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeProvider;