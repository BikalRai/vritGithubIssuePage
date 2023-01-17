import React, { useState } from 'react';
import {
    Breadcrumbs,
    Button,
    ButtonGroup,
    Chip,
    ClickAwayListener,
    Container,
    Divider,
    FormControl,
    Grid,
    Grow,
    Icon,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    OutlinedInput,
    Paper,
    Popper,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ComputerIcon from '@mui/icons-material/Computer';
import BugReportIcon from '@mui/icons-material/BugReport';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import InsightsIcon from '@mui/icons-material/Insights';
import { ArrowDropDown } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import { Box } from '@mui/system';

const Header = () => {
    const [display, setDisplay] = useState('none');

    const actions = [
        { icon: <AddCircleOutlineIcon />, name: 'New Issue' },
        { icon: <LocalOfferIcon />, name: 'Labels' },
        { icon: <MarkunreadMailboxIcon />, name: 'Milestones' },
    ];

    const handleOpen = () => {
        if (display === 'none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    };

    return (
        <>
            <main>
                <Container>
                    <Grid container justifyContent="space-between" my={5}>
                        <Grid item>
                            <Grid container alignItems="center" gap={1}>
                                <ComputerIcon />
                                <Typography variant="h5">facebook /</Typography>
                                <Typography variant="h5">react</Typography>
                                <Chip label="public" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container gap={1}>
                                <Grid item sx={{ position: 'relative' }}>
                                    <Button onClick={() => handleOpen()}>
                                        <VisibilityIcon /> Watch{' '}
                                        <Chip variant="outlined" label="1234" />
                                        <ArrowDropDown />
                                    </Button>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            maxWidth: 360,
                                            bgcolor: 'gray',
                                            position: 'absolute',
                                            display: { display },
                                        }}
                                    >
                                        <nav aria-label="main mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        {/* <ListItemIcon> */}
                                                        <Typography>
                                                            Participating and
                                                            @mentions
                                                        </Typography>
                                                        {/* </ListItemIcon> */}
                                                        <ListItemText />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        {/* <ListItemIcon> */}
                                                        <Typography>
                                                            All activities
                                                        </Typography>
                                                        {/* </ListItemIcon> */}
                                                        <ListItemText />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <Divider />
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary="Trash" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton
                                                        component="a"
                                                        href="#simple-list"
                                                    >
                                                        <ListItemText primary="Spam" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Box>
                                </Grid>
                                <Grid item sx={{ position: 'relative' }}>
                                    <Button onClick={() => handleOpen()}>
                                        <VisibilityIcon /> Watch{' '}
                                        <Chip variant="outlined" label="1234" />
                                        <ArrowDropDown />
                                    </Button>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            maxWidth: 360,
                                            backgroundColor: 'black',
                                            color: '#fff',
                                            position: 'absolute',
                                            display: { display },
                                        }}
                                    >
                                        <nav aria-label="main mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        {/* <ListItemIcon> */}
                                                        <Typography>
                                                            Participating and
                                                            @mentions
                                                        </Typography>
                                                        {/* </ListItemIcon> */}
                                                        <ListItemText />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        {/* <ListItemIcon> */}
                                                        <Typography>
                                                            All activities
                                                        </Typography>
                                                        {/* </ListItemIcon> */}
                                                        <ListItemText />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <Divider />
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary="Trash" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton
                                                        component="a"
                                                        href="#simple-list"
                                                    >
                                                        <ListItemText primary="Spam" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Box>
                                </Grid>
                                <Grid item sx={{ position: 'relative' }}>
                                    <Button onClick={() => handleOpen()}>
                                        <VisibilityIcon /> Watch{' '}
                                        <Chip variant="outlined" label="1234" />
                                        <ArrowDropDown />
                                    </Button>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            maxWidth: 360,
                                            backgroundColor: 'black',
                                            color: '#fff',
                                            position: 'absolute',
                                            display: { display },
                                        }}
                                    >
                                        <nav aria-label="main mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        {/* <ListItemIcon> */}
                                                        <Typography>
                                                            Participating and
                                                            @mentions
                                                        </Typography>
                                                        {/* </ListItemIcon> */}
                                                        <ListItemText />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        {/* <ListItemIcon> */}
                                                        <Typography>
                                                            All activities
                                                        </Typography>
                                                        {/* </ListItemIcon> */}
                                                        <ListItemText />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                        <Divider />
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                        <ListItemText primary="Trash" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton
                                                        component="a"
                                                        href="#simple-list"
                                                    >
                                                        <ListItemText primary="Spam" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Grid container gap={1}>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <CodeIcon />
                            Code
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <BugReportIcon />
                            Issues
                            <Chip label="123" />
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <MergeTypeIcon />
                            Pull requests
                            <Chip label="123" />
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <PlayArrowIcon />
                            Actions
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <DeveloperBoardIcon />
                            Projects
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <LibraryBooksIcon />
                            Wiki
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <PrivacyTipIcon />
                            Security
                        </Button>
                        <Button sx={{ display: 'flex', gap: '0.5rem' }}>
                            <InsightsIcon />
                            Insights
                        </Button>
                    </Grid>
                </Container>
                <Container>
                    <Grid container gap={2}>
                        <Grid item flexGrow={1}>
                            <Button>
                                Filters <ArrowDropDown />
                            </Button>
                            <Menu>
                                <MenuItem>One</MenuItem>
                                <MenuItem>Two</MenuItem>
                                <MenuItem>Three</MenuItem>
                            </Menu>

                            <FormControl sx={{ width: 'min(100%, 50rem)' }}>
                                <OutlinedInput
                                    type="search"
                                    size="small"
                                    placeholder="test"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Icon>
                                                <SearchIcon />
                                            </Icon>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>

                        <Grid item>
                            {/* <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                New issue
                            </Button> */}
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                // sx={{
                                //     position: 'absolute',
                                //     bottom: 16,
                                //     right: 16,
                                // }}
                                icon={<SpeedDialIcon />}
                                direction="left"
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                    />
                                ))}
                            </SpeedDial>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default Header;
