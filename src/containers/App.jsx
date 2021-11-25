import React        from 'react';
import { Fragment } from 'react';
import Header       from '@containers/Header';
import Profile      from '@containers/Profile';
import Services     from '@containers/Services';
import Welcome      from '@containers/Welcome';
import Portfolio    from '@containers/Portfolio';
import '@styles/app.scss';



const App = () => {
    return (
        <Fragment>    
           <Header />  
           <Profile />
           <Services />
           <Welcome />
           <Portfolio />
        </Fragment>
    )
}

export default App
