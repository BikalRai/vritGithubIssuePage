import { LocalDining } from '@mui/icons-material';
import { Avatar, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialState, issueReducer } from '../issueInfo/state/issueReducer';
import {
    issueDetails,
    issueDetailsReducer,
} from '../issueInfo/state/commentReducer';
import './comment.css';

const Comments = () => {
    // const [data, dispatch] = useReducer(issueReducer, initialState);
    const [issueDetail, dispatch] = useReducer(
        issueDetailsReducer,
        issueDetails
    );
    const { issueNumber } = useParams();

    const getData = async () => {
        try {
            await axios
                .get(
                    `https://api.github.com/repos/facebook/react/issues/${issueNumber}`
                )
                .then(({ data }) => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                    console.log(data, 'data');
                });
        } catch (error) {
            console.log('Error');
        }

        try {
            await axios
                .get(
                    `https://api.github.com/repos/facebook/react/issues/${issueNumber}/comments`
                )
                .then(({ data }) => {
                    console.log(data, 'second');
                    dispatch({ type: 'FETCH_COMMENT_SUCCESS', payload: data });
                });
        } catch (error) {
            console.log('Error');
        }
    };

    useEffect(() => {
        getData();
        // getComments();
    }, []);

    console.log(issueDetail, 'iss');
    return (
        <>
            <Typography
                variant="subtitle1"
                sx={{ backgroundColor: 'steelblue' }}
            >
                {issueDetail.details.body}
            </Typography>
            {issueDetail.comments.map((comment) => {
                return (
                    <Grid className="box">
                        <Avatar
                            alt="Remy Sharp"
                            src={comment.user.avatar_url}
                        />
                        <span>{comment.user.login}</span>
                        <span>{comment.created_at}</span>
                        <Typography>{comment.body}</Typography>
                    </Grid>
                );
            })}
        </>
    );
};

export default Comments;
