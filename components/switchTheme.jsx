import React, {useContext} from 'react';
import {Button} from "reactstrap";
import {ThemeContext, THEMES} from "../styles/theme/theme";
import {Icon, addIcon, addCollection} from '@iconify/react/offline';

import Light from '@iconify-icons/bi/lightbulb';
import LightFill from '@iconify-icons/bi/lightbulb-fill';

const SwitchTheme = () => {
    const {setMode, setTheme, mode} = useContext(ThemeContext);
    const switchTheme = () => {
        setMode((prev) => {
            return prev === "light" ? "dark" : "light";
        });
        setTheme((prev) => {
            return prev === THEMES.light ? THEMES.dark : THEMES.light;
        });
    }
    return (
        <div>
            <Button className={mode === "light" ? "switchThemeLight" : "switchThemeDark"} style={{zIndex: 5}} onClick={switchTheme}>
                <Icon icon={
                    mode === "light" ? Light : LightFill
                }
                      width={35}
                />
            </Button>
        </div>
    );
};

export default SwitchTheme;
