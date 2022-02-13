import { Grid, Paper, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

import React from 'react';

const MainInformation = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" component="div">В аренде:</Typography>
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                        >
                            <TreeItem nodeId="1" label="Applications">
                                <TreeItem nodeId="2" label="Calendar" />
                            </TreeItem>
                            <TreeItem nodeId="5" label="Documents">
                                <TreeItem nodeId="10" label="OSS" />
                                <TreeItem nodeId="6" label="MUI">
                                    <TreeItem nodeId="8" label="index.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeView>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h5" component="div">На складе:</Typography>
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                        >
                            <TreeItem nodeId="1" label="Applications">
                                <TreeItem nodeId="2" label="Calendar" />
                            </TreeItem>
                            <TreeItem nodeId="5" label="Documents">
                                <TreeItem nodeId="10" label="OSS" />
                                <TreeItem nodeId="6" label="MUI">
                                    <TreeItem nodeId="8" label="index.js" />
                                </TreeItem>
                            </TreeItem>
                        </TreeView>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
};

export default MainInformation;