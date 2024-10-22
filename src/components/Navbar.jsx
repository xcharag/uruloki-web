import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import MenuIcon from '@mui/icons-material/Menu';
import uruLogo from '/assets/uruloki-logo-tpbg.png';

import {Box, Button, Container, IconButton, Menu, MenuItem, Typography} from "@mui/material";

function ResponsiveAppBar(){
    const [anchorElNav, setAnchorElNav] = useState();

    const pages = ['Productos', 'Noticias'];
    const settings = ['Perfil', 'Tienda', 'Cerrar Sesión'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <AppBar position="static" sx={{width: '100%', backgroundColor: '#03346E'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        srcSet={`${uruLogo}`}
                        alt="Uruloki Logo"
                        sx={{
                            height: { xs: 60, md: 60, lg: 80 },
                            width: 'auto',
                            display: {xs: 'none', md: 'flex'},
                            mr: 2,
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Uruloki
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}} >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        component="img"
                        srcSet={`${uruLogo}`}
                        alt="Uruloki Logo"
                        sx={{
                            height: { xs: 60, md: 60, lg: 80 },
                            width: 'auto',
                            display: {xs: 'flex', md: 'none'},
                            mr: 2,
                        }}
                    />

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Uruloki
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;