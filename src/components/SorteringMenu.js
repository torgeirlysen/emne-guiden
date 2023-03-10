import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import SortIcon from '@mui/icons-material/Sort';
import { useState } from "react";


export function SorteringMenu(props) {
    const [anchor, setAnchor] = useState(null);
    const options = [
        "Emnenavn (synkende)", "Emnenavn (stigende)", 
        "Emnekode (synkende)", "Emnekode (stigende)", 
        "Snitt (synkende)", "Snitt (stigende)",
        "Strykprosent (synkende)", "Strykprosent (stigende)",
    ];

    const [selected, setSelected] = useState(-1);

    const openMenu = (event) => {
        setAnchor(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchor(null);
    };

    const onMenuItemClick = (event, index) => {
        setAnchor(null);
        setSelected(index);
        props.sorterEmner(["navn","kode","snitt","strykProsent",][Math.floor(index/2)], (index + 1) % 2)
    };
    return (
        <Box >
            <Button onClick={openMenu} variant="outlined" sx={{ marginLeft: "30px" }}>
                <SortIcon />
            </Button>

            <Menu
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={closeMenu}
                keepMounted
                TransitionComponent={Slide}
                PaperProps={{
                    style: {
                        maxHeight: 40 * options.length,
                        width: "28ch",
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        onClick={(event) => onMenuItemClick(event, index)}
                        selected={index === selected}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

