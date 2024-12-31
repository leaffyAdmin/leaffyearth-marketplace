import theme from '@/styles/theme/theme';
import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import Image from 'next/image'
import MenuDrawer from './menuDrawer';


// icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {


    return (
        <header>
            <Box
                aria-label='header-banner'
                sx={{
                    width: '100%',
                    backgroundColor: theme.palette.secondary.main,
                    py: '6px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='subtitle2' color='white' alignSelf={'center'}>
                    WINTER SALE: 30% OFF selected*
                </Typography>
            </Box>


            <Stack
                direction='row'
                sx={{
                    maxWidth: '1680px',
                    px: 1,
                    margin: 'auto',
                    py: '18px',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >

                <Stack
                    direction='row'
                    spacing={3}
                    sx={{
                        alignItems: 'center'
                    }}
                >


                    <MenuDrawer />

                    <Image
                        id='headerLogoImage'
                        src="https://leaffystorage.blob.core.windows.net/public/header-logo.png"
                        alt="Leaffy Storage Logo"
                        width={240}
                        height={50}
                        // priority
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
                            gap: 4
                        }}
                    >

                        <ListItem disablePadding>
                            <ListItemText
                                primary="Plants"
                                primaryTypographyProps={{
                                    sx: { fontWeight: 500 },
                                }}
                            />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemText
                                primary="Planters"
                                primaryTypographyProps={{
                                    sx: { fontWeight: 500 },
                                }}
                            />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemText
                                primary="offers"
                                primaryTypographyProps={{
                                    sx: { fontWeight: 500 },
                                }}
                            />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemText
                                primary="Blogs"
                                primaryTypographyProps={{
                                    sx: { fontWeight: 500 },
                                }}
                            />
                        </ListItem>


                    </List>
                </nav>

                <Stack
                    direction='row'
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <AccountCircleOutlinedIcon fontSize='large' />
                    <ShoppingCartOutlinedIcon fontSize='large' />
                </Stack>

            </Stack>
        </header>
    );
}
