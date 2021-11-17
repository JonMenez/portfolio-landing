import React from 'react'
import Header from './Header'
import Profile from '../components/Profile';
import '../styles/app.scss'
import { Fragment } from 'react';
import Hexagon from '../components/Hexagon';



const App = () => {
    return (
        <Fragment>    
        

           <Header />  
           <Profile />
           <Hexagon/>
      

        </Fragment>
    )
}

export default App
