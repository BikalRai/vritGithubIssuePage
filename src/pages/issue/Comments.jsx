import { LocalDining } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialState, issueReducer } from '../issueInfo/state/issueReducer';
import {
    issueDetails,
    issueDetailsReducer,
} from '../issueInfo/state/commentReducer';
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
            <Typography sx={{ backgroundColor: 'red' }}>
                {issueDetail.details.body}
            </Typography>
            <Typography sx={{ backgroundColor: 'lightblue' }}>
                {issueDetail.comments.map((comment) => comment.body)}
            </Typography>
        </>
    );
};

export default Comments;
