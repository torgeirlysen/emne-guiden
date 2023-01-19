import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material/';
import { EmneListe } from '../../components/EmneListe';
import { SøkeFelt } from '../../components/Søkefelt';
import { getEmner } from '../../functions/getEmner';
import { TopNav } from '../../components/TopNav';

export function HomePage(props) {
    const alleEmner = getEmner()
    const [emner, changeEmner] = React.useState(alleEmner)
    let søkBlantEmner = (s) => {
        let tempEmner = alleEmner.filter(emne => emne.kode.startsWith(s.toUpperCase()) || emne.navn.toUpperCase().startsWith(s.toUpperCase()))
        changeEmner(tempEmner)
    }

    let sorterEmner = (attribute, synkende) => {
        var tempEmner = Array.from(emner);

        let sortingFunction = function (a, b) {
            return a[attribute] - b[attribute];
        };
        if (tempEmner.length) {
            if (typeof emner[0][attribute] === 'string' || emner[0][attribute] instanceof String) {
                sortingFunction = (a, b) => a[attribute].localeCompare(b[attribute], 'en', { sensitivity: 'base' })
            }
        }
        tempEmner.sort(sortingFunction);


        if (synkende) {
            tempEmner.reverse()
        }

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
        <TopNav theme={props.theme} colorMode={props.colorMode} />
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
                <SøkeFelt søkBlantEmner={søkBlantEmner} sorterEmner={sorterEmner} />
                <EmneListe emner={emner} />
            </Box>
        </Box>
    </Box>
}