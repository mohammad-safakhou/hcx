import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: '#1e2328',
        },
        primary: {
            main: '#f5b301',
        },
        secondary: {
            main: '#fff',
        }
    },
    overrides: {
        // For label
        MuiCard: {
            root: {
                "& .hidden-button": {
                    display: "none"
                },
                "&:hover .hidden-button": {
                    display: "flex"
                }
            }
        }
    }
    // components: {
    //     // Name of the component
    //     MuiAppBar: {
    //         variants: [],
    //         styleOverrides: {
    //             root: ({theme}) =>
    //                 theme.unstable_sx({
    //                     backgroundColor: '#1e2328',
    //                     color: '#f5b301',
    //                 }),
    //         },
    //         defaultProps: {},
    //     },
    // },
});
export default theme;