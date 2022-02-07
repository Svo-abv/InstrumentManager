import React, { useContext } from 'react';
import { ListSubheader, ListItemIcon, ListItemText, List, ListItemButton, Collapse } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Context } from '../..';
import OrganizationList from '../dictionaryUI/OrganizationList';
import ClientsList from '../dictionaryUI/ClientsList';
import WarehousesList from '../dictionaryUI/WarehousesList';
import ItemsList from '../dictionaryUI/ItemsList';
import UnitsList from '../dictionaryUI/UnitsList';
import DocumentTypesList from '../documentUI/DocumentTypesList';
import DocumentStatusList from '../documentUI/DocumentStatusList';
import { observer } from 'mobx-react';

const SecondaryListItems = observer(() => {

    const [openDictionary, setOpenDictionary] = React.useState(false);
    const [openReports, setOpenReports] = React.useState(false);

    const { currElement } = useContext(Context);

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
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <OrganizationList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Организации" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <ClientsList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Клиенты" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <WarehousesList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Склады" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <ItemsList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Номенклатура" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <UnitsList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Единицы измерения" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <DocumentTypesList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Виды операций" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}
                        onClick={() => { currElement.element = <DocumentStatusList /> }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Статусы документов" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
});

export default SecondaryListItems;