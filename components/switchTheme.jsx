import React, {useContext} from 'react';
import {Button} from "reactstrap";
import {ThemeContext, THEMES} from "../styles/theme/theme";

const SwitchTheme = () => {
    const {setMode , setTheme , mode} = useContext(ThemeContext);
    const switchTheme = () => {
        setMode((prev)=>{
            return prev === "light" ? "dark" : "light";
        });
        setTheme((prev)=>{
            return prev === THEMES.light ? THEMES.dark : THEMES.light;
        });
    }
    return (
        <div>
            <Button style={{zIndex:5}} onClick={switchTheme}>
                Switch Theme
            </Button>
        </div>
    );
};

export default SwitchTheme;
