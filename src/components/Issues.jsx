import {
    Badge,
    Box,
    Card,
    CardActions,
    CardContent,
    Chip,
    Grid,
    IconButton,
    Pagination,
    Typography,
} from '@mui/material';

import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import HiveIcon from '@mui/icons-material/Hive';

import { Link, useNavigate } from 'react-router-dom';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

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
    const [labelStatus, setLabelStatus] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const navigate = useNavigate();

    const toComment = (num) => {
        navigate(`/comments/${num}`);
    };

    useEffect(() => {
        axios
            .get('https://api.github.com/repos/facebook/react/issues')
            .then(({ data }) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
                console.log(data, 'data');
            })
            .catch((error) => dispatch({ type: 'FETCH_ERROR' }));
        setCurrentTime(new Date().getTime());
    }, []);

    console.log(state, 'state');
    console.log(currentTime, 'ct');

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
                            let status = '';
                            const timeDiff = Math.floor(
                                (currentTime - new Date(issue.created_at)) /
                                    1000 /
                                    60
                            );
                            if (timeDiff < 1) {
                                status = 'just now';
                            } else if (timeDiff > 60 && timeDiff < 1440) {
                                status = `${Math.floor(
                                    timeDiff / 60
                                )} hours ago`;
                            } else if (timeDiff >= 1440 && timeDiff < 2880) {
                                status = 'yesterday';
                            } else if (timeDiff >= 2880 && timeDiff < 4320) {
                                status = '2 days ago';
                            } else if (timeDiff >= 4320 && timeDiff < 5760) {
                                status = '3 days ago';
                            } else if (timeDiff >= 5760 && timeDiff < 7200) {
                                status = '4 days ago';
                            } else if (timeDiff >= 7200 && timeDiff < 8640) {
                                status = '5 days ago';
                            } else if (timeDiff >= 8640 && timeDiff < 10080) {
                                status = '6 days ago';
                            } else if (timeDiff >= 10080 && timeDiff < 18720) {
                                status = 'last week';
                            } else if (timeDiff >= 18720 && timeDiff < 28800) {
                                status = '2 weeks ago';
                            } else if (timeDiff >= 28800 && timeDiff < 38880) {
                                status = '3 weeks ago';
                            } else if (timeDiff >= 38880 && timeDiff < 48960) {
                                status = 'last month';
                            } else {
                                status = `${new Date(
                                    issue.created_at
                                ).getMonth()}`;
                            }

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
                                                <Typography
                                                    component={Link}
                                                    to={`/comments/${issue.number}`}
                                                >
                                                    {issue.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {`#${issue.number} opened ${status} by ${issue.user.login} `}
                                                </Typography>
                                                <Typography>
                                                    {issue.labels.map(
                                                        (label, index) => {
                                                            return (
                                                                <Chip
                                                                    sx={{
                                                                        backgroundColor: `#${label.color}`,
                                                                    }}
                                                                    key={index}
                                                                    label={
                                                                        label.name
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Typography>
                                                <span>
                                                    {issue?.comments ? (
                                                        <Badge
                                                            color="primary"
                                                            badgeContent={
                                                                issue.comments
                                                            }
                                                        >
                                                            <IconButton
                                                                onClick={() =>
                                                                    toComment(
                                                                        issue.number
                                                                    )
                                                                }
                                                            >
                                                                <ModeCommentIcon
                                                                    sx={{
                                                                        color: 'rgba(0, 0, 0, 0.5)',
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </Badge>
                                                    ) : (
                                                        ''
                                                    )}
                                                </span>
                                            </CardContent>
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
