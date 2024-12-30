// styles/theme.ts
import { createTheme } from '@mui/material/styles';
import { lora, montserrat } from '@/styles/fonts';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1D3E37',
        },
        secondary: {
            main: '#397B57',
        },
        background: {
            default: '#EFF7EA',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    typography: {
        fontFamily: montserrat.style.fontFamily,

        h1: {
            fontFamily: lora.style.fontFamily,
        },
        h2: {
            fontFamily: lora.style.fontFamily,
        },
        h3: {
            fontFamily: lora.style.fontFamily,
        },
    },
});

export default theme;
