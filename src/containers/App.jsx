import React        from 'react'
import { Fragment } from 'react';
import Header       from './Header'
import Profile      from '@containers/Profile';
import Services     from './Services';
import '@styles/app.scss'
import Welcome from './Welcome';



const App = () => {
    return (
        <Fragment>    
        
           <Header />  
           <Profile />
           <Services />
           <Welcome />
        </Fragment>
    )
}

export default App
