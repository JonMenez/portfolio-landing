import React from 'react';
import Photo from '../assets/images/profile.png';
import '../styles/profile.scss';
import Polygon from '../assets/images/polygon.svg';
import PolygonMain from '../assets/images/polygon-main.svg';
import jsIcon from '../assets/icons/javascrpt.svg';
import reactIcon from '../assets/icons/react.svg';
import sassIcon from '../assets/icons/sass.svg';
import figmaIcon from '../assets/icons/figma.svg';
import gitIcon from '../assets/icons/git.svg';


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


