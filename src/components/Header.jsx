import React from 'react';
import {
    Breadcrumbs,
    Button,
    ButtonGroup,
    Chip,
    ClickAwayListener,
    Container,
    FormControl,
    Grid,
    Grow,
    Icon,
    InputAdornment,
    Menu,
    MenuItem,
    MenuList,
    OutlinedInput,
    Paper,
    Popper,
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

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>
            <main>
                <Container>
                    <Grid container justifyContent="space-between">
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
                                <Grid>
                                    <Button
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={
                                            open
                                                ? 'composition-menu'
                                                : undefined
                                        }
                                        aria-expanded={
                                            open ? 'true' : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        // sx={{
                                        //     backgroundColor: 'rgba(0,0,0, 0.5)',
                                        //     color: 'white',
                                        // }}
                                        color="success"
                                        variant="outlined"
                                        size="small"
                                        sx={{ display: 'flex', gap: '0.5rem' }}
                                    >
                                        <VisibilityIcon />
                                        Watch
                                        <Chip
                                            label="public"
                                            variant="outlined"
                                        />
                                    </Button>
                                    <Popper
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement ===
                                                        'bottom-start'
                                                            ? 'left top'
                                                            : 'left bottom',
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener
                                                        onClickAway={
                                                            handleClose
                                                        }
                                                    >
                                                        <MenuList
                                                            autoFocusItem={open}
                                                            id="composition-menu"
                                                            aria-labelledby="composition-button"
                                                            onKeyDown={
                                                                handleListKeyDown
                                                            }
                                                        >
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Profile
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                My account
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Logout
                                                            </MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </Grid>
                                <Grid>
                                    <Button
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={
                                            open
                                                ? 'composition-menu'
                                                : undefined
                                        }
                                        aria-expanded={
                                            open ? 'true' : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        // sx={{
                                        //     backgroundColor: 'rgba(0,0,0, 0.5)',
                                        //     color: 'white',
                                        // }}
                                        color="success"
                                        variant="outlined"
                                        size="small"
                                        sx={{ display: 'flex', gap: '0.5rem' }}
                                    >
                                        <VisibilityIcon />
                                        Watch
                                        <Chip
                                            label="public"
                                            variant="outlined"
                                        />
                                    </Button>
                                    <Popper
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement ===
                                                        'bottom-start'
                                                            ? 'left top'
                                                            : 'left bottom',
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener
                                                        onClickAway={
                                                            handleClose
                                                        }
                                                    >
                                                        <MenuList
                                                            autoFocusItem={open}
                                                            id="composition-menu"
                                                            aria-labelledby="composition-button"
                                                            onKeyDown={
                                                                handleListKeyDown
                                                            }
                                                        >
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Profile
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                My account
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Logout
                                                            </MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </Grid>
                                <Grid>
                                    <Button
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={
                                            open
                                                ? 'composition-menu'
                                                : undefined
                                        }
                                        aria-expanded={
                                            open ? 'true' : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        // sx={{
                                        //     backgroundColor: 'rgba(0,0,0, 0.5)',
                                        //     color: 'white',
                                        // }}
                                        color="success"
                                        variant="outlined"
                                        size="small"
                                        sx={{ display: 'flex', gap: '0.5rem' }}
                                    >
                                        <VisibilityIcon />
                                        Watch
                                        <Chip
                                            label="public"
                                            variant="outlined"
                                        />
                                    </Button>
                                    <Popper
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement ===
                                                        'bottom-start'
                                                            ? 'left top'
                                                            : 'left bottom',
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener
                                                        onClickAway={
                                                            handleClose
                                                        }
                                                    >
                                                        <MenuList
                                                            autoFocusItem={open}
                                                            id="composition-menu"
                                                            aria-labelledby="composition-button"
                                                            onKeyDown={
                                                                handleListKeyDown
                                                            }
                                                        >
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Profile
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                My account
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                            >
                                                                Logout
                                                            </MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
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
                        <Grid>
                            <Button>
                                Filters <ArrowDropDown />
                            </Button>
                            <Menu>
                                <MenuItem>One</MenuItem>
                                <MenuItem>Two</MenuItem>
                                <MenuItem>Three</MenuItem>
                            </Menu>

                            <FormControl sx={{ width: '50rem' }}>
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

                        <Grid>
                            <ButtonGroup
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
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    );
};

export default Header;
