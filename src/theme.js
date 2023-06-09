import {createContext, useState, useMemo} from 'react';
import {createTheme} from '@mui/material/styles';

// color design tokens
export const tokens = (mode) =>({
    ...(mode === 'dark'
    ? {
        white: {
            100: "#fdfdfd",
            200: "#fbfbfb",
            300: "#f9f9f9",
            400: "#f7f7f7",
            500: "#f5f5f5",
            600: "#c4c4c4",
            700: "#939393",
            800: "#626262",
            900: "#313131"
        },
        primary: {
            100: "#cccccc",
            200: "#999999",
            300: "#666666",
            400: "#f2f2f0",
            500: "#000000",
            600: "#1B1B1B",
            700:  "#303030",
            800: "#363636",
            900: "#292929"
        },
        goldAccent: {
            100: "#fff7cc",
            200: "#ffef99",
            300: "#ffe766",
            400: "#ffdf33",
            500: "#ffd700",
            600: "#ccac00",
            700: "#998100",
            800: "#665600",
            900: "#332b00"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#e1e2fe",
            200: "#c3c6fd",
            300: "#a4a9fc",
            400: "#868dfb",
            500: "#6870fa",
            600: "#535ac8",
            700: "#3e4396",
            800: "#2a2d64",
            900: "#151632"
        },
    } 
    : {
        white: {
            100: "#313131",
            200: "#626262",
            300: "#939393",
            400: "#c4c4c4",
            500: "#f5f5f5",
            600: "#f7f7f7",
            700: "#f9f9f9",
            800: "#fbfbfb",
            900: "#fdfdfd"
        },
        primary: {
            100: "#292929",
            200: "#363636",
            300:  "#303030",
            400: "#1B1B1B",
            500: "#000000",
            600: "#f2f2f0",
            700:"#666666",
            800:"#999999",
            900:"#cccccc"
        },
        goldAccent: {
            100: "#332b00",
            200: "#665600",
            300: "#998100",
            400: "#ccac00",
            500: "#ffd700",
            600: "#ffdf33",
            700: "#ffe766",
            800: "#ffef99",
            900: "#fff7cc"
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb"
        },
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#c3c6fd",
            900: "#e1e2fe"
        },
    } ),
});

// material-ui theme setting
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.goldAccent[500],
                },
                neutral: {
                    dark: colors.white[700],
                    main: colors.white[500],
                    light: colors.white[100]
                },
                background: {
                    default: colors.primary[500],
                }
            } : {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.goldAccent[500],
                },
                neutral: {
                    dark: colors.white[100],
                    main: colors.white[500],
                    light: colors.white[900]
                },
                background: {
                    default:'#fcfcfc',
                },
            }),
        },
        typography: {
            fontFamily: ['Source Sans 3','sans-serif'].join(','),
            fontSize:12,
             h1: {
                fontFamily: ['Source Sans 3','sans-serif'].join(','),
                fontSize:40,
             },
             h2: {
                fontFamily: ['Source Sans 3','sans-serif'].join(','),
                fontSize:32,
             },
             h3: {
                fontFamily: ['Source Sans 3','sans-serif'].join(','),
                fontSize:24,
             },
             h4: {
                fontFamily: ['Source Sans 3','sans-serif'].join(','),
                fontSize:20,
             },
             h5: {
                fontFamily: ['Source Sans 3','sans-serif'].join(','),
                fontSize:16,
             },
             h6: {
                fontFamily: ['Source Sans 3','sans-serif'].join(','),
                fontSize:14,
             },
        }
    }
}

// color context for color mode

export const colorModeContext = createContext ({
    toggleColorMode:() => {}
});
