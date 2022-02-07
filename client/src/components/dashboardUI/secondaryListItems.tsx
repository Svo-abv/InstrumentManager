import React from 'react';
import { ListSubheader, ListItemIcon, ListItemText, List, ListItemButton, Collapse } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const SecondaryListItems = () => {

    const [openDictionary, setOpenDictionary] = React.useState(false);
    const [openReports, setOpenReports] = React.useState(false);


    const handleClickReports = () => {
        setOpenReports(!openReports);
    };
    const handleClickDictionary = () => {
        setOpenDictionary(!openDictionary);
    };


    return (
        <List>
            <ListSubheader inset>Дополнительно</ListSubheader>
            <ListItemButton onClick={handleClickReports}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Отчеты" />
                {openReports ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <ListItemButton onClick={handleClickDictionary}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Справочники" />
                {openDictionary ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDictionary} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Организации" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Клиенты" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Склады" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Номенклатура" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Единицы измерения" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Виды операций" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Статусы документов" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};

export default SecondaryListItems;