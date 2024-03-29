import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Footer } from '../components/authfoot';
import { NavBar } from '../components/authnav';
import { SideBarNav } from '../components/helpers/sidebarnav';
import { useSidebar } from '../context/mobilenav';

export const Forums = () => {

    const { isSidebarOpen } = useSidebar();

    return (
        <Container
            disableGutters={true}
            maxWidth='xl'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
            }}
        >
            <NavBar />
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'center'
                }}
            >
                <TextField
                    id="searchBar"
                    label='Search Forums'
                    variant="outlined"
                    type='search'
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        mt: '32px',
                        '& .MuiOutlinedInput-root': {
                            width: '100%',
                            maxWidth: '600px',
                            '& fieldset': {
                                borderColor: 'var(--theme-orange)'
                            },
                            '&:hover fieldset': {
                                borderColor: '#fe6f10',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'var(--theme-orange)',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                            cursor: 'text',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: 'var(--theme-orange)',
                            },
                        },
                        '& input:-webkit-autofill': {
                            backgroundColor: 'transparent !important',
                        },


                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchOutlinedIcon
                                    sx={{
                                        color: 'white'
                                    }}
                                />
                            </InputAdornment>
                        )
                    }}

                />
                {isSidebarOpen && (
                    <SideBarNav />
                )}
            </Container>
            <Footer />
        </Container>
    )
}
