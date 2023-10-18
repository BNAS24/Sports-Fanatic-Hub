import { NavLink } from "react-router-dom"
import customTheme from "../styles/context/customtheme"
import './styles/authnav.css'
import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
    return (
        <nav className='header-container'>
            <div className='logo_name_container'>
                <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                <div className='title'>Sports Fanatic</div>
            </div>
            <div className='nav-container'>
                <p><NavLink className='links-hover-state' to='/dashboard' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Dashboard</NavLink></p>
                <p><NavLink className='links-hover-state' to='/forums' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Forums</NavLink></p>
                <p><NavLink className='links-hover-state' to='/live-scores' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Live Scores</NavLink></p>
                <p><NavLink className='links-hover-state' to='/profile' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Profile</NavLink></p>
            </div>
            <IconButton
                sx={{
                    position: 'absolute',
                    display: {
                        xs: 'flex',
                        sm: 'none',
                        md: 'none',
                        lg: 'none',
                    },
                    right: '24px',
                    marginTop: '0',
                    height: '24px',
                    width: '24px',
                }}
            >
                <MenuIcon
                    sx={{
                        color: 'var(--theme-orange)'
                    }}
                />
            </IconButton>
        </nav>
    )
}