import React from 'react';
import projectsIcon from '../assets/icons/projects.svg';
import '@styles/portfolio.scss';


const Portfolio = () => {
    return (
        <section className="portfolio">
            {/* <h4 className="portfolio__title">Projects</h4> */}
            <img className="portfolio__title" src={ projectsIcon } alt="" />
            <div></div>
        </section>
    )
}

export default Portfolio
