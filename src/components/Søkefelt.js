import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SorteringMenu } from './SorteringMenu';

export function SøkeFelt(props) {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '80vw',
                display: "flex",
                alignItems: "center"
            }}
        >
            <TextField fullWidth label="Emnekode/Emnenavn" id="fullWidth" onChange={e => props.søkBlantEmner(e.target.value)} />
            <SorteringMenu />
        </Box>
    );
}

