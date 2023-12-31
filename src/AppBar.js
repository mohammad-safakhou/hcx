import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {appName} from './consts';

const pages = ['Products', 'Pricing', 'About US'];

function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);
    // const fullname = 'John Doe';

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar position="sticky" color={"primary"}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {appName}
                            </Typography>
                            <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'flex', md: 'none'},
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {appName}
                            </Typography>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>


                            <Button className="sign-in-button"
                                    sx={{backgroundColor: '#1e2328', "&:hover": {background: '#fff', color: '#f5b301'}}}
                                    color="secondary" varient="contained">Login/Register </Button>
                            {/*<Box sx={{flexGrow: 0}}>*/}
                            {/*    <Tooltip title="Open settings">*/}
                            {/*        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*/}
                            {/*            <Avatar alt={fullname} src={logo}/>*/}
                            {/*        </IconButton>*/}
                            {/*    </Tooltip>*/}
                            {/*    <Menu*/}
                            {/*        sx={{mt: '45px'}}*/}
                            {/*        id="menu-appbar"*/}
                            {/*        anchorEl={anchorElUser}*/}
                            {/*        anchorOrigin={{*/}
                            {/*            vertical: 'top',*/}
                            {/*            horizontal: 'right',*/}
                            {/*        }}*/}
                            {/*        keepMounted*/}
                            {/*        transformOrigin={{*/}
                            {/*            vertical: 'top',*/}
                            {/*            horizontal: 'right',*/}
                            {/*        }}*/}
                            {/*        open={Boolean(anchorElUser)}*/}
                            {/*        onClose={handleCloseUserMenu}*/}
                            {/*    >*/}
                            {/*        {settings.map((setting) => (*/}
                            {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                            {/*                <Typography textAlign="center">{setting}</Typography>*/}
                            {/*            </MenuItem>*/}
                            {/*        ))}*/}
                            {/*    </Menu>*/}
                            {/*</Box>*/}
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>

        </React.Fragment>
    );
}
