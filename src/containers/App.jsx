import  * as React  from 'react';
import { Fragment } from 'react';
import Header       from '@containers/Header';
import Profile      from '@containers/Profile';
import Services     from '@containers/Services';
import Welcome      from '@containers/Welcome';
import Portfolio    from '@containers/Portfolio';
import '@styles/app.scss';
import Feedbacks from './Feedbacks';



const App = () => {
    return (
        <Fragment>    
           <Header />  
           <Profile />
           <Services />
           <Welcome />
           <Portfolio />
           <Feedbacks />
        </Fragment>
    )
}

export default App
