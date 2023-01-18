import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { openInNewTab } from '../functions/openInNewTab';




export function EmneListe(props) {

    return (
        <Box sx={{ width: '80vw', maxWidth: 700, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary="Navn" />
                        <Box>
                            <ListItemText
                                primary="Strykprosent/Snitt"
                                sx={{ marginLeft: "auto" }}
                            />
                        </Box>
                    </ListItem>
                    {props.emner.map((emne, i) => <EmneItem key={i} emne={emne} />
                    )}

                </List>
            </nav>
        </Box>
    );
}

function EmneItem(props) {
    let emne = props.emne
    return <>
        <ListItem key={props.key} disablePadding onClick={() => openInNewTab(`https://www.ntnu.no/studier/emner/${emne.kode}`)}>
            <ListItemButton component="a" href="#simple-list">
                <ListItemText primary={
                    <div style={{ maxWidth: "calc(80vw-100px)" }}>
                        {emne.navn}
                    </div>
                } secondary={emne.kode} href="You" />
                <Box>
                    <ListItemText
                        primary={emne.strykProsent}
                        secondary={emne.snitt}

                    />
                </Box>
            </ListItemButton>
        </ListItem>
        <Divider />
    </>
}