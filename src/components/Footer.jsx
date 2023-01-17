import { Breadcrumbs, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <Grid py={5} container justifyContent="center" gap={2}>
                <GitHubIcon />
                <Typography>{`© ${new Date().getFullYear()} GitHub, Inc.`}</Typography>

                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </Grid>
        </>
    );
};

export default Footer;
