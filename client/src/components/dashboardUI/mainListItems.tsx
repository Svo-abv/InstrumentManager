import React, { useContext, useState } from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import { observer } from 'mobx-react';
import { Context } from '../..';
import { documentsMenuElements } from '../../utils/constants';
import { IMenuElements } from '../../types/types';

const MainListItems = observer(() => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openDocuments, setOpenDocuments] = useState(false);

    const { currElement } = useContext(Context);

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
                    <ArticleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Документы" />
                {openDocuments ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openDocuments} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        documentsMenuElements.map((item: IMenuElements, itr) => (
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

export default MainListItems;