import {
    Breadcrumbs,
    Button,
    Card,
    CardContent,
    Chip,
    ClickAwayListener,
    Grid,
    Grow,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import { Link } from 'react-router-dom';

const options = [1, 2, 3];

const Issues = () => {
    return (
        <>
            <main>
                <Card
                    variant="outlined"
                    sx={{ backgroundColor: 'rgba(0, 105, 255, 0.2)' }}
                >
                    <CardContent>
                        <Typography component={Link}>Title</Typography>
                        <Typography>Last logged in</Typography>
                    </CardContent>
                </Card>
            </main>
        </>
    );
};

export default Issues;
