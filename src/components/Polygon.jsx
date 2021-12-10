import  * as React  from 'react';
import { Fragment } from 'react';
import PolygonIcon     from '@images/polygon.svg';
import PolygonMain from '@images/polygon-main.svg';
import '@styles/polygon.scss';

const Polygon = () => {
    return (
        <Fragment>
            <img className="profile__polygon polygon1" src={ PolygonIcon } alt="polygon shape" />
            <img className="profile__polygon polygon2" src={ PolygonIcon } alt="polygon shape" />
            <img className="profile__polygon polygon3" src={ PolygonIcon } alt="polygon shape" />
            <img className="profile__polygon polygon4" src={ PolygonIcon } alt="polygon shape" />
            <img className="profile__polygon polygon--main" src={ PolygonMain } alt="polygon shape inner text" />
        </Fragment>
    )
}

export default Polygon
