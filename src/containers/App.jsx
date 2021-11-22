import React        from 'react'
import { Fragment } from 'react';
import Header       from './Header'
import Profile      from '@components/Profile';
import Services     from './Services';
import '@styles/app.scss'



const App = () => {
    return (
        <Fragment>    
        
           <Header />  
           <Profile />
           <Services/>
        </Fragment>
    )
}

export default App
