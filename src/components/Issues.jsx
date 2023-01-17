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
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

import { Link } from 'react-router-dom';

const initialState = {
    issues: [],
};

const reducer = (state, action) => {
    // axios.get('https://github.com/facebook/react').then(({ data }) => {
    //     state = data;
    // });
};

const Issues = () => {
    const [data, dispatch] = useReducer(reducer, initialState);
    const [data1, setData1] = useState([]);

    const getData = async () => {
        await axios
            .get('https://github.com/facebook/react/issues')
            .then(({ data }) => {
                setData1(data);
            });

        console.log(data1, 'data1');
    };

    useEffect(() => {
        getData();
    }, []);

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
