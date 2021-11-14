import React from 'react';
import ResumeButton from '../components/resumeButton';
import NavBar from '../components/NavBar';
import '../styles/header.scss';


const Header = () => {
    return (
        <header className='NavBar'>
            <ResumeButton/>
            <NavBar/>
        </header>
    )
}

export default Header
