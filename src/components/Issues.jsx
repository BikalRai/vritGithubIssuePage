import {
    Badge,
    Box,
    Card,
    CardActions,
    CardContent,
    Chip,
    Grid,
    Pagination,
    Typography,
} from '@mui/material';

import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import HiveIcon from '@mui/icons-material/Hive';

import { Link } from 'react-router-dom';

const initialState = {
    loading: true,
    error: '',
    issues: [],
};

const reducer = (state, action) => {
    console.log(action, 'action type');

    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                issues: action.payload,
                error: '',
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                issues: [],
                error: 'Something went wrong',
            };
        default:
            return state;
    }
};

const Issues = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios
            .get('https://63c1863699c0a15d28ec247b.mockapi.io/details')
            .then(({ data }) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
                console.log(data, 'data');
            })
            .catch((error) => dispatch({ type: 'FETCH_ERROR' }));
    }, []);

    console.log(state, 'state');

    const handlePage = (e, newPage) => {
        setPage(newPage);
        console.log(page, 'page');
    };

    return (
        <>
            <main>
                <Container>
                    {state.issues
                        .slice(
                            page * rowsPerPage - rowsPerPage,
                            page * rowsPerPage
                        )
                        .map((issue, index) => {
                            return (
                                <Grid
                                    key={index}
                                    container
                                    py={1}
                                    sx={{ width: '80%', margin: 'auto' }}
                                >
                                    <Grid sx={{ width: '100%' }}>
                                        <Card variant="outlined">
                                            <CardContent
                                                sx={{
                                                    display: 'flex',
                                                    gap: '2rem',
                                                }}
                                            >
                                                <Badge color="primary">
                                                    <HiveIcon />
                                                </Badge>
                                                <Typography component={Link}>
                                                    {issue.firstName}
                                                </Typography>
                                                <Typography>
                                                    {issue.lastName}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Grid container>
                                                    <Chip
                                                        label="Type: Bug"
                                                        color="error"
                                                    />
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    <Box
                        my={2}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Pagination
                            onChange={handlePage}
                            count={Math.ceil(state.issues.length / rowsPerPage)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </Box>
                </Container>
            </main>
        </>
    );
};

export default Issues;
