import React from 'react';
import PorfolioIcon from '../assets/icons/code-block.svg';
import FeedBack from '../assets/icons/message-detail.svg';
import AboutIcon from '../assets/icons/body.svg';
import MenuIcon from '../assets/icons/menu.svg';
import '../styles/navBar.scss'



//probar SVGR 


const NavBar = () => {
  //const [active, setActive] = useState(false);

  return (   
    <nav>
        <ul className="navigation" 
        //id={active ? "active" : ""}
        >
          <li className="navigation__item home">
            <a href="#">Home</a>
          </li>
          <li className="navigation__item ">
            <img className="nav__icon" src={ PorfolioIcon } alt="Porfolio icon" />
            <a className="navigation__link" href="#">
              Portfolio
            </a>
          </li>
          <li className="navigation__item nav__tablet">
            <img className="nav__icon" src={ PorfolioIcon} alt="Servies icon" />
            <a className="navigation__link" href="#">
              Services
            </a>
          </li>
          <li className="navigation__item nav__tablet">
            <img className="nav__icon" src={ FeedBack } alt="Feedback icon" />
            <a className="navigation__link" href="#">
              Feedbacks
            </a>
          </li>
          <li className="navigation__item">
            <img className="nav__icon" src={ AboutIcon } alt="About me icon" />
            <a className="navigation__link" href="#">
              About me
            </a>
          </li>
        </ul>
        <button
          className="navigation__button"
          //onClick={() => setActive(!active)}
        >
          <img className="navigation__menu" src={ MenuIcon } alt="Menu icon" />
        </button>
    </nav>
  )
}

export default NavBar;
