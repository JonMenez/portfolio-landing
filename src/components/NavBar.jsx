import  * as React  from 'react';
import { useState } from 'react';
import PorfolioIcon from '@icons/archive.svg';
import FeedBack     from '@icons/message-detail.svg';
import AboutIcon    from '@icons/body.svg';
import MenuIcon     from '@icons/menu.svg';
import ContactIcon  from '@icons/envelope.svg';
import HomeIcon     from '@icons/home.svg';
import '@styles/navBar.scss'



//probar SVGR 


const NavBar = () => {
  const [active, setActive] = useState(false);

  return (   
    <nav>
        <ul className="navigation" 
        id={active ? "active" : ""}
        >
          <li className="navigation__item home">
            <a href="#">
              <img src={ HomeIcon } alt="Home button" />
            </a>
          </li>
          <li className="navigation__item nav__tablet1">
            <img className="nav__icon" src={ PorfolioIcon } alt="Porfolio icon" />
            <a className="navigation__link" href="#">
              Portfolio
            </a>
          </li>
          <li className="navigation__item ">
            <img className="nav__icon" src={ PorfolioIcon} alt="Servies icon" />
            <a className="navigation__link" href="#">
              Services
            </a>
          </li>
          <li className="navigation__item ">
            <img className="nav__icon" src={ FeedBack } alt="Feedback icon" />
            <a className="navigation__link" href="#">
              Feedbacks
            </a>
          </li>
          <li className="navigation__item nav__tablet2">
            <img className="nav__icon" src={ AboutIcon } alt="About me icon" />
            <a className="navigation__link" href="#">
              About me
            </a>
          </li>
          <li className="navigation__item contactButton">
          <img className="nav__icon--contact" src={ ContactIcon } alt="Porfolio icon" />
            <a className="navigation__link" href="#">
              Contact me
            </a>
          </li>
        </ul>
        <button
          className="navigation__button"
          onClick={() => setActive(!active)}
        >
          <img className="navigation__menu" src={ MenuIcon } alt="Menu icon" />
        </button>
    </nav>
  )
}

export default NavBar;
