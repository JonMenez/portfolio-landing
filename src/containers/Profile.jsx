import  * as React  from 'react';
// import Photo       from '@images/profile.svg';
import Photo       from '@images/profile.jpeg';
import jsIcon      from '@icons/javascrpt.svg';
import reactIcon   from '@icons/react.svg';
import sassIcon    from '@icons/sass.svg';
import figmaIcon   from '@icons/figma.svg';
import gitIcon     from '@icons/git.svg';
import Polygon from '@components/Polygon';
import '@styles/profile.scss';


const Profile = () => {

  const icons = [jsIcon,reactIcon,sassIcon,figmaIcon,gitIcon]

    return (
        
        <section id="home" className="profile">
            <img className="profile__pic"  src={ Photo } alt="Profile photo" />
            <div className="profile__body">
                <h1 className="profile__title">@Jon_menez</h1>
                <h2 className='profile__text'>Front end developer</h2>
                <div>
                { icons.map( icon => <img className="profile__icon" key={ icon.toString() } src={ icon } alt="tech icons" /> ) }
                </div>
            </div>
            <Polygon/>
        </section >
        
    )
}

export default Profile


