import React, { useContext, useState } from 'react';
import { ListSubheader, ListItemIcon, ListItemText, List, ListItemButton, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Context } from '../..';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import BatchPredictionRoundedIcon from '@mui/icons-material/BatchPredictionRounded';
import { observer } from 'mobx-react';
import { IMenuElements } from '../../types/types';
import { dictionaryMenuElements, reportsMenuElements } from '../../utils/constants';

const SecondaryListItems = observer(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDictionary, setOpenDictionary] = React.useState(false);
    const [openReports, setOpenReports] = React.useState(false);

    const { currElement } = useContext(Context);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

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
                    <AssessmentRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Отчеты" />
                {openReports ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openReports} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        reportsMenuElements.map((item: IMenuElements, itr) => (
                            <ListItemButton key={item.name} sx={{ pl: 4 }} selected={selectedIndex === itr}
                                onClick={(event) => {
                                    handleListItemClick(event, itr);
                                    currElement.element = item.element;
                                }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
            <ListItemButton onClick={handleClickDictionary}>
                <ListItemIcon>
                    <BatchPredictionRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Справочники" />
                {openDictionary ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDictionary} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        dictionaryMenuElements.map((item: IMenuElements, itr) => (
                            <ListItemButton key={item.name} sx={{ pl: 4 }} selected={selectedIndex === itr}
                                onClick={(event) => {
                                    handleListItemClick(event, itr);
                                    currElement.element = item.element;
                                }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
});

export default SecondaryListItems;