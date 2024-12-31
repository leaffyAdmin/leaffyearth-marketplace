// styles/theme.ts
import { createTheme } from '@mui/material/styles';
import { montserrat, belanosima } from '@/styles/fonts';

const theme = createTheme({
    palette: {
        primary: {
            main: '#397B57',
        },
        secondary: {
            main: '#1D3E37',
        },
        background: {
            default: '#F8FFF4',
        },
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
            fontFamily: belanosima.style.fontFamily,
        },
        h2: {
            fontFamily: belanosima.style.fontFamily,
        },
        h3: {
            fontFamily: belanosima.style.fontFamily,
        },
        h4: {
            fontFamily: belanosima.style.fontFamily,
        },
        h5: {
            fontFamily: belanosima.style.fontFamily,
        },
        h6: {
            fontFamily: belanosima.style.fontFamily,
        },
    },
});

export default theme;
