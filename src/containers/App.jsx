import  * as React  from 'react';
import { Fragment } from 'react';
import Header       from '@containers/Header';
import Profile      from '@containers/Profile';
import Services     from '@containers/Services';
import Welcome      from '@containers/Welcome';
import Portfolio    from '@containers/Portfolio';
import Feedbacks    from '@containers/Feedbacks';
import '@styles/app.scss';



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
