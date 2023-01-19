import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { openInNewTab } from '../functions/openInNewTab';




export function EmneListe(props) {

    return (
        <Box sx={{ width: '80vw', maxWidth: 700, bgcolor: 'background.paper' }}>
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
        </Box>
    );
}

function EmneItem(props) {
    let emne = props.emne
    return <>
        <ListItem key={props.key} disablePadding onClick={() => openInNewTab(`https://www.ntnu.no/studier/emner/${emne.kode}`)}>
            <ListItemButton component="a" >
                <ListItemText primary={
                    <div style={{ maxWidth: "calc(80vw-100px)" }}>
                        {emne.navn}
                    </div>
                } secondary={emne.kode} href="You" />
                <Box sx={{ textAlign: "right" }}>
                    <ListItemText
                        primary={
                            `${emne.strykProsent}%`
                        }
                        secondary={
                            <>
                                <span style={{ width: "7ch" }}>
                                    {emne.snitt}
                                    <span style={{ marginLeft: "1ch" }}>
                                        {["F", "E", "D", "C", "B", "A"][Math.round(emne.snitt)]}
                                    </span>
                                </span>
                            </>

                        }

                    />
                </Box>
            </ListItemButton>
        </ListItem>
        <Divider />
    </>
}