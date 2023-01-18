import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SortIcon from '@mui/icons-material/Sort';
import Button from '@mui/material/Button';

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
            <TextField fullWidth label="Fagkode" id="fullWidth" onChange={e => props.søkBlantEmner(e.target.value)} />
            <Button variant="outlined" sx={{marginLeft: "30px"}}>
                <SortIcon />
            </Button>

        </Box>
    );
}

