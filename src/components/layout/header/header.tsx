'use client';

import { useState, useEffect, useRef } from 'react';
import theme from '@/styles/theme/theme';
import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import MenuDrawer from './menuDrawer';
import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false);
    const [leavesView, setLeavesView] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (!headerRef.current) return;
            const headerBottom = headerRef.current.offsetTop + headerRef.current.offsetHeight;

            if (window.scrollY >= headerBottom + 400) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }

            if (window.scrollY >= headerBottom) {
                setLeavesView(true);
            } else {
                setLeavesView(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Banner */}
            <Box
                aria-label="header-banner"
                sx={{
                    width: '100%',
                    backgroundColor: theme.palette.secondary.main,
                    py: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="subtitle2" color="white" alignSelf="center">
                    WINTER SALE: 30% OFF selected*
                </Typography>
            </Box>

            {isFixed && (
                <Box
                    sx={{
                        height: headerRef.current?.offsetHeight ?? 0,
                    }}
                />
            )}

            {/* Main Header */}
            <header
                ref={headerRef}
                style={{
                    position: isFixed ? 'fixed' : 'static',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    backgroundColor: theme.palette.background.default,
                    transition: leavesView ? 'transform 0.4s ease-in-out' : 'transform 0.0s ease-in-out',
                    transform: leavesView && isFixed ? 'translateY(0)' : leavesView ? 'translateY(-100%)' : 'translateY(0)'
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        maxWidth: '1680px',
                        width: '100%',
                        px: 1,
                        margin: 'auto',
                        py: '18px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
                        <MenuDrawer />

                        <Image
                            id="headerLogoImage"
                            src="https://leaffystorage.blob.core.windows.net/public/header-logo.png"
                            alt="Leaffy Storage Logo"
                            width={240}
                            height={50}
                        />
                    </Stack>

                    <nav aria-label="main navigation">
                        <List
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'flex',
                                    lg: 'flex',
                                },
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 4,
                            }}
                        >
                            <ListItem disablePadding>
                                <ListItemButton component={Link} href="/collections/plants">
                                    <ListItemText primary="Plants" primaryTypographyProps={{ sx: { fontWeight: 500 } }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={Link} href="/collections/planters">
                                    <ListItemText primary="Planters" primaryTypographyProps={{ sx: { fontWeight: 500 } }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={Link} href="/collections/planters">
                                    <ListItemText primary="offers" primaryTypographyProps={{ sx: { fontWeight: 500 } }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={Link} href="/blogs">
                                    <ListItemText primary="Blogs" primaryTypographyProps={{ sx: { fontWeight: 500 } }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>

                    <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <AccountCircleOutlinedIcon fontSize="large" />
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </Stack>
                </Stack>
            </header>
        </>
    );
}
