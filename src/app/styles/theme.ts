import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0b0b0b', // noir
            light: '#ffffff', //blanc
        },
        secondary: {
            main :'#ee1b48' // rose/rouge
        },
        background : {
            default:'#eeb31b', // jaune/orange
        }
    },
    typography : {
        fontFamily: `'Bluu Next', 'Inter', sans-serif'`,
        h1: {
            fontFamily:'Blue Next, sans-serif',
            fontSize: '138px',
            fontWeight: '500',
            lineHeight : '151.8px',
            color : 'the',

        },
        h2: { // titres moyens
            fontFamily: 'Blue Next, sans-serif',
            fontSize: '68px',
            fontWeight: '400',
            lineHeight: '75px',
        },
        h3: { // titres plus petits
            fontFamily: 'Bluu Next, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '23.2px',
        },
        body1 : { // texte
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '25.5px',
        }
    }

});

export default theme;