import  * as React  from 'react';
import ResumeButton from '@components/ResumeButton';
import NavBar       from '@components/NavBar';
import '@styles/header.scss';


const Header = () => {
    return (
        <header className='NavBar'>
            <div className="navBar__navigation">
            <ResumeButton/>
            <NavBar/>
            </div>
        </header>
    )
}

export default Header
