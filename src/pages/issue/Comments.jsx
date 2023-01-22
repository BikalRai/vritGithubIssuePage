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
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Comments = () => {
    // const [data, dispatch] = useReducer(issueReducer, initialState);
    const [issueDetail, dispatch] = useReducer(
        issueDetailsReducer,
        issueDetails
    );
    const { issueNumber } = useParams();

    const getData = async () => {
        try {
            const { data: userdetail } = await axios.get(
                `https://api.github.com/repos/facebook/react/issues/${issueNumber}`
            );

            const { data } = await axios.post(
                `https://api.github.com/markdown`,
                {
                    text: userdetail.body,
                }
            );

            dispatch({ type: 'FETCH_SUCCESS', payload: data });
            console.log(userdetail, 'data');

            const { data: comments } = await axios.get(
                `https://api.github.com/repos/facebook/react/issues/${issueNumber}/comments`
            );
            dispatch({ type: 'FETCH_COMMENT_SUCCESS', payload: comments });
            console.log(comments, 'try me!!');

            comments.map((one) => {
                console.log(one, 'one!!');
            });

            console.log(data, ' iam superman!!');
        } catch (error) {
            console.log('Error');
        }
    };

    // const postComments = () => {
    //     console.log('i am running');
    //     console.log(issueDetail, 'I am detail');
    //     issueDetail.comments.map((comment) => {
    //         console.log(comment, 'WOohoo!!');
    //         axios
    //             .post(`https://api.github.com/markdown`, {
    //                 text: `${comment.body}`,
    //             })
    //             .then((res) => console.log(res, 'wow!!'));
    //     });
    // };

    useEffect(() => {
        getData();

        // getComments();
        // postComments();
    }, []);

    console.log(issueDetail.details, 'iss');
    return (
        <>
            <Typography variant="body2"></Typography>
        </>
    );
};

export default Comments;
