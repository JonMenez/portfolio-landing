import  * as React  from 'react';
import projectsIcon from '@icons/projects.svg';
import '@styles/portfolio.scss';
import PortfolioCard from '@components/PortfolioCard';


const Portfolio = () => {
    return (
        <section className="portfolio">
            <img className="portfolio__title" src={ projectsIcon } alt="" />
            <div className="portfolio__card">
            <PortfolioCard/>
            <PortfolioCard/>
            </div>
        </section>
    )
}

export default Portfolio
