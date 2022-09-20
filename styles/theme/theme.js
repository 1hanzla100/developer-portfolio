import React from "react";
import {lightTheme} from "./lightTheme";
import {darkTheme} from "./darkTheme";


const DEFAULT_THEME = "light";
export const THEMES = {
    light: lightTheme,
    dark: darkTheme,
}
export const defaultValues = {
    mode: DEFAULT_THEME,
    setMode: () => {},
    setTheme: () => {},
    theme: THEMES[DEFAULT_THEME],
}
export const ThemeContext = React.createContext(defaultValues);
