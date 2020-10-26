import React from "react";
import StateProvider from "./src/store/StateProvider";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./src/utils/theme";

export const wrapRootElement = ({ element }) => (
    <StateProvider>
        <ThemeProvider theme={ theme }>
            { element }
        </ThemeProvider>
    </StateProvider>
);
