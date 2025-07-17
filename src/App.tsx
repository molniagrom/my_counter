import './App.css'
import {ThemeProvider} from '@mui/material/styles';
import {SuperCount} from "./components/SuperCount.tsx";
import {Box, createTheme} from "@mui/material";
import {blue, green} from "@mui/material/colors";
import { useState } from 'react';

function App() {
    const [isLight, setIsLight] = useState(true);

    const theme = createTheme({
        palette: {
            primary: {
                main: blue[800],
                light: blue[300],
                dark: blue[900],
                contrastText: '#fff',
            },
            secondary: green,
            mode: isLight ? 'light' : 'dark'
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={theme.palette.primary.dark}>
                <SuperCount setIsLight={setIsLight} isLight={isLight}/>
            </Box>
        </ThemeProvider>
    )
}

export default App
