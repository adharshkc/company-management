import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette:{
        primary:{
            main: '#EDE8F5',
            dark:'#3F72AF',


        },
        secondary:{
            main: '#7091e6',
            dark: '#112D4E'
        },
        info:{
            main:'#000'
        },
        text: {
            primary: '#000000', 
            secondary: '#000000' 
        },
    },
    typography: {

            fontFamily: 'Poppins, Arial, sans-serif'
        
    }
})