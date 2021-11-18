import React       from 'react';
import Photo       from '@images/profile.png';
import Polygon     from '@images/polygon.svg';
import PolygonMain from '@images/polygon-main.svg';
import jsIcon      from '@icons/javascrpt.svg';
import reactIcon   from '@icons/react.svg';
import sassIcon    from '@icons/sass.svg';
import figmaIcon   from '@icons/figma.svg';
import gitIcon     from '@icons/git.svg';
import '../styles/profile.scss';


const Profile = () => {

  const icons = [jsIcon,reactIcon,sassIcon,figmaIcon,gitIcon]

    return (
        <div>
        <section className="profile">
            <img className="profile__pic"  src={ Photo } alt="Profile photo" />
            <div className="profile__body">
                <h1 className="profile__title">@Jon_menez</h1>
                <h2 className='profile__text'>Front end developer</h2>
                <div>
                { icons.map( icon => <img className="profile__icon" key={ icon.toString() } src={ icon } alt="" /> ) }
                </div>
            </div>
            <img className="profile__polygon polygon1" src={ Polygon } alt="" />
            <img className="profile__polygon polygon2" src={ Polygon } alt="" />
            <img className="profile__polygon polygon3" src={ Polygon } alt="" />
            <img className="profile__polygon polygon4" src={ Polygon } alt="" />
            <img className="profile__polygon polygon--main" src={ PolygonMain } alt="" />
        </section >
        </div>
    )
}

export default Profile


