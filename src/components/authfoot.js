//This will be a footer component that you can reuse for your pages.
import './styles/authfoot.css'
import { NavLink } from "react-router-dom"
import customTheme from "../styles/context/customtheme"

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <p className='copyright'>© 2023 Copyright  Sports Fanatic Hub</p>
            <div className='nav-container'>
                <p><NavLink className='links-hover-state' to='/about-us' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>About Us</NavLink></p>
                <p><NavLink className='links-hover-state' to='/dashboard' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Contact Us</NavLink></p>
            </div>
        </footer>
    )
}