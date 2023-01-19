import { LocalDining } from '@mui/icons-material';
import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { initialState, issueReducer } from '../issueInfo/state/issueReducer';
const Comments = () => {
    const [data, dispatch] = useReducer(issueReducer, initialState);

    const getData = () => {
        axios
            .get('https://api.github.com/repos/facebook/react/issues')
            .then(({ data }) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
                console.log(data, 'data');
            })
            .catch((error) => dispatch({ type: 'FETCH_ERROR' }));
    };

    // const getComments = () => {
    //     axios
    //         .get(
    //             `https://api.github.com/repos/facebook/react/issues/${data.issues.number}/comments`
    //         )
    //         .then(({ data }) => {
    //             dispatch({ type: 'FETCH_SUCCESS', payload: data });
    //         })
    //         .catch((error) => {
    //             dispatch({ type: 'FETCH_ERROR' });
    //         });
    // };

    useEffect(() => {
        getData();
        // getComments();
    }, []);

    console.log(data, 'iss');
    return (
        <>
            {data.issues.map((issue) => {
                return <Typography>{issue.body}</Typography>;
            })}
        </>
    );
};

export default Comments;
