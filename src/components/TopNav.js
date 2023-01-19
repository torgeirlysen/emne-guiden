import * as React from 'react';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export function TopNav(props) {
    let navigate = useNavigate();
    const location = useLocation();

    const routeChange = (path) => {
        navigate(path);
    }
    return <Box sx={{ position: "fixed", width: "95vw", height: "50px", bgcolor: 'background.default', }}>
        <IconButton sx={{ ml: 1, margin: "15px" }} onClick={props.colorMode.toggleColorMode} color="inherit">
            {props.theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {location.pathname === "/" ?
            <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => routeChange("/about")}>
                <InfoIcon />
            </IconButton>
            :
            <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => routeChange("/")}>
                <HomeIcon />
            </IconButton>
        }
    </Box>
}