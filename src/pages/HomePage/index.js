import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material/';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { EmneListe, FullWidthTextField } from '../../components/EmneListe';
import { SøkeFelt } from '../../components/Søkefelt';
import { getEmner } from '../../functions/getEmner';

export function HomePage(props) {
    const alleEmner = getEmner()
    const [emner, changeEmner] = React.useState(alleEmner)
    let søkBlantEmner = (s) => {
        let tempEmner = alleEmner.filter(emne => emne.kode.startsWith(s.toUpperCase()) || emne.navn.toUpperCase().startsWith(s.toUpperCase()))
        changeEmner(tempEmner)
    }

    return <Box
        sx={{
            width: '100vw',
            height: "100vh",
            bgcolor: 'background.default',
            color: 'text.primary',
            overflowY: "auto",
            overflowX: "hidden",
            p: 0
        }}
    >
            <Box sx={{ position: "fixed", width: "95vw", height: "50px", bgcolor: 'background.default', }}>
                <IconButton sx={{ ml: 1, margin: "15px" }} onClick={props.colorMode.toggleColorMode} color="inherit">
                    {props.theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100vw',
                    justifyContent: 'center',

                }}
            >
                <Box sx={{
                    maxWidth: '90%', marginTop: "50px"
                }}>

                    <Typography variant="h2" sx={{ marginBottom: "30px" }}>
                        Emne Guiden
                    </Typography>
                    <SøkeFelt søkBlantEmner={søkBlantEmner} />

                    <EmneListe emner={emner} />
                </Box>
        </Box>
    </Box>
}