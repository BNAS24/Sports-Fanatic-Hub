import '../styles/profile.css'
import { NavBar } from "../components/authnav"
import { Footer } from '../components/authfoot';
import { Grid, Typography, Avatar, Modal } from '@mui/material';
import { Box, Container } from '@mui/system';

const badges = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster'];

const settings = {
    changeEmailAddress: {
        title: 'Change Email Address',
    },
    changePassword: {
        title: 'Change Password',
    },
    updateProfilePicter: {
        title: 'Update Profile Picture',
    },
    userStats: {
        title: 'User Stats',
    },
    logout: {
        title: 'Logout',
    }
}

export const Profile = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                border: 'dashed 1px yellow',
                overflow: 'hidden',
            }}>
            <NavBar />
            <Grid
                container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: '1fr 5fr',
                    gridGap: '8px',
                    columnGap: '56px',
                    padding: '24px 24px',
                    flex: '1',
                    maxHeight: '100vh',
                }}
            >
                {/*First Grid Item*/}
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '1 / 1 / 2 / 2',
                        border: 'dashed 1px yellow'
                    }}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: '100%',
                            alignItems: 'start',
                            paddingLeft: '0 !important',
                            color: 'white'
                        }}>
                        <Avatar
                            variant='square'
                            alt='profile picture'
                            src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                            sx={{
                                height: '104px',
                                width: '104px'
                            }} />
                        <Typography
                            variant='h3'
                            style={{
                                marginLeft: '24px'
                            }}

                        >
                            Brandon
                            {/*The name will be dynamicall rendered*/}
                        </Typography>
                    </Container>
                </Grid>
                {/*Second Grid Item*/}
                <Grid
                    item
                    container
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '2 / 1 / 3 / 2',
                        border: 'dashed 1px yellow'
                    }}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexShrink: '0',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxHeight: '100%',
                            paddingLeft: '0 !important',
                            paddingRight: '0 !important'
                        }}>

                        <Typography
                            noWrap
                            align='center'
                            variant='h4'
                            sx={{
                                flexShrink: 0,
                                flexGrow: 1,
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '1.3rem',
                                    md: '1.7rem',
                                    lg: '2.5rem',
                                    xl: ''
                                }
                            }}>
                            Badges
                        </Typography>

                        <Container
                            sx={{
                                display: 'flex',
                                flexGrow: '1',
                                flexWrap: 'wrap',
                                height: '100%',
                                width: '100%',
                                marginTop: '24px',
                                paddingLeft: '16px !important',
                                paddingRight: '16px !important',
                                overflowY: 'auto',
                                border: 'solid 1px #F26101'
                            }}>
                            {/*Add map*/}
                            {badges.map((badge) =>
                                <Container
                                    key={badge}
                                    sx={{
                                        display: 'flex',
                                        flexGrow: 1,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        width: '33%',
                                        marginTop: '24px',

                                    }}
                                >
                                    <Avatar
                                        variant='square'
                                        alt='team logo'
                                        src='https://cdn-icons-png.flaticon.com/512/2553/2553695.png'
                                        sx={{
                                            height: '62px',
                                            width: '62px',
                                        }}
                                    >

                                    </Avatar>
                                    <Typography
                                        variant='body1'
                                        align='center'
                                        className='links-hover-state'

                                        sx={{
                                            flexShrink: 2,
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {badge}
                                    </Typography>
                                </Container>
                            )}

                        </Container>
                    </Container>
                </Grid>
                {/*Third Grid Item*/}
                <Grid
                    item
                    container
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '1 / 2 / 3 / 3',
                        border: 'solid 1px var(--theme-orange)',
                    }}
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: 'solid 1px var(--theme-orange)',
                        }}
                    >
                        <Typography
                            noWrap
                            variant='h3'
                            align='center'
                            sx={{
                                marginTop: '24px',
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '2rem',
                                    md: '2.3rem',
                                    lg: '3rem',
                                    xl: ''
                                },
                                textDecoration: 'underline',
                            }}
                        >
                            Account Settings
                        </Typography>
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '100%',
                                border: '1px dashed yellow',
                                height: '100%'
                            }}
                        >
                            {Object.keys(settings).map((key) =>
                                <Typography
                                    key={key}
                                    variant='h5'
                                    align='center'
                                    noWrap
                                    className='links-hover-state'
                                >
                                    {settings[key].title}
                                </Typography>
                            )}
                            {/* <Modal> */}
                        </Container>
                    </Container>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}