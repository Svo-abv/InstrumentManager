import React, { useState } from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';


const MainListItems = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDocuments, setOpenDocuments] = useState(false);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const handleClickDocuments = () => {
        setOpenDocuments(!openDocuments);
    };

    return (
        <List>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Панель" />
            </ListItemButton>
            <ListItemButton
                onClick={(event) => handleClickDocuments()}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Документы" />
                {openDocuments ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDocuments} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Движения" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }} selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Платежы" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};

export default MainListItems;