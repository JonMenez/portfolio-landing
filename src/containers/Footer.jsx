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
        <footer className='footer'>
            <div className="footer__about">
            <h6 className="footer__title">About me</h6>
            <p className="footer__text"><span className="footer__hey">Hey!</span>My name is <span className="footer__name">Joan</span> and i like to swimming, otherwise I like programming web app to companies and clients. </p>
            </div>
            <ul className="footer__list">
                <h6 className="footer__title--hidden">Links</h6>
                <li className="footer__item"><a className="footer__link" href="#">Home</a></li>
                <li className="footer__item"><a className="footer__link" href="#">Projects</a></li>
                <li className="footer__item"><a className="footer__link" href="#">Services</a></li>
                <li className="footer__item"><a className="footer__link" href="#">Feedbacks</a></li>
            </ul>
            <div className="footer__icons">
            <h6 className="footer__title--hidden">Social Media</h6>
               <a href="">
                <img className="footer__link--icon" src={ GitIcon } alt="github icon" />
               </a>
               <a href="">
                <img className="footer__link--icon" src={ LinkndIcon } alt="linkedin icon" />
               </a>
               <a href="">
                <img className="footer__link--icon" src={ InstagramIcon } alt="instagram icon" />
               </a>
               <a href="">
                <img className="footer__link--icon" src={ TwitterIcon} alt="twitter icon" />

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
