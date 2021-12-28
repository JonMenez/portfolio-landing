import * as React from 'react'
import GitIcon       from "@icons/githubw.svg"
import LinkndIcon    from "@icons/linkedin.svg"
import InstagramIcon from "@icons/instagram.svg"
import TwitterIcon   from "@icons/twitter.svg"
import CopyRightIcon   from "@icons/copyRight.svg"
import "@styles/footer.scss"


const Footer = () => {

    const currentYear = () => new Date().getFullYear();

    return (
        <footer id="about" className='footer'>
            <div className="footer__about">
            <h6 className="footer__title">About me</h6>
            <p className="footer__text"><span className="footer__hey">Hey!</span>My name is <span className="footer__name">Joan</span> and i like to swimming, otherwise I like programming web app to companies and clients. </p>
            </div>
            <ul className="footer__list">
                <h6 className="footer__title--links">Links</h6>
                <li className="footer__item"><a className="footer__link" href="#home">Home</a></li>
                <li className="footer__item"><a className="footer__link" href="#portfolio">Projects</a></li>
                <li className="footer__item"><a className="footer__link" href="#services">Services</a></li>
                <li className="footer__item"><a className="footer__link" href="#feedbacks">Feedbacks</a></li>
            </ul>
            <div className="footer__icons">
            <h6 className="footer__title--social">Social Media</h6>
               <a className="social-links" target="_blank" href="https://github.com/JonMenez">
                <img className="footer__link--icon" src={ GitIcon } alt="github icon" />
                <span className="footer__link--text">/JonMenez</span>
               </a>
               <a className="social-links" target="_blank" href="https://www.linkedin.com/in/joan-g-2485961bb/">
                <img className="footer__link--icon" src={ LinkndIcon } alt="linkedin icon" />
                <span className="footer__link--text">/Jon_menez</span>
               </a>
               <a className="social-links" target="_blank" href="https://www.instagram.com/jon_menez/">
                <img className="footer__link--icon" src={ InstagramIcon } alt="instagram icon" />
                <span className="footer__link--text">/Jon_menez</span>
               </a>
               <a className="social-links" target="_blank" href="https://twitter.com/Jon_menez">
                <img className="footer__link--icon" src={ TwitterIcon} alt="twitter icon" />
                <span className="footer__link--text">/Jon_menez</span>

               </a>
            </div>
            <div className="footer__copyright">
                <p className="footer__develop">designed & developed <span>by Jon_menez</span></p>
                <p className="footer__develop rights"><img className="copyrightIcon" src={ CopyRightIcon } alt="copyright icon" /> { currentYear() }  All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
