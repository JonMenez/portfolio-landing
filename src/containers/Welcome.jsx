import  * as React  from 'react';
import arrowIcon from '@icons/arrow.svg';
import PolygonShape from '@images/polygon.svg';
import '@styles/welcome.scss';

const Welcome = () => {
    return (
        <section className="welcome">
            <h4 className="welcome__title">You're  welcome  to  have  a  look!</h4>
            <img className="welcome__img  arrow1" src={ arrowIcon } alt="arrow image" />
            <img className="welcome__img  arrow2" src={ arrowIcon } alt="arrow image" />
            <img className="welcome__img  arrow3" src={ arrowIcon } alt="arrow image" />
            <img className="polugonShape p1" src={ PolygonShape } alt="polygon shape" />
            <img className="polugonShape p2" src={ PolygonShape } alt="polygon shape" />
            <img className="polugonShape p3" src={ PolygonShape } alt="polygon shape" />
            <img className="polugonShape p4" src={ PolygonShape } alt="polygon shape" />
            <img className="polugonShape p5" src={ PolygonShape } alt="polygon shape" />
        </section>
    )
}

export default Welcome
