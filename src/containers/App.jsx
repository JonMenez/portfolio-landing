import React from 'react'
import Header from './Header'
import Profile from '../components/Profile';
import '../styles/app.scss'
import { Fragment } from 'react';



const App = () => {
    return (
        <Fragment>    
        
           <Header />  
           <Profile />
      
        </Fragment>
    )
}

export default App
