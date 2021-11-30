import React from 'react';
import LinkIcon from '@icons/externalLink.svg';
import GitIcon from '@icons/github.svg';
import '@styles/portfolioCard.scss';

const PortfolioCard = () => {
    return (
        <figure className="card">
            <img
               className="card__img"
               src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
               alt="project image"
             />
            <figcaption className="card__content">
                <h2 className="card__title">
                  Vetina Shop
                </h2>
                <p className="card__links">
                  <a href="#">    
                  <img className="iconGit" src={ GitIcon } alt="" />
                  </a>
                  <a href="#">
                    <img className="iconLink" src={ LinkIcon } alt="external link icon" />
                  </a>
                </p>
                <p className="card__info">
                 eCommerce web site isnpired on neture. Get the best coffee and tea in town.
               </p>
            </figcaption>
        </figure>
        
        
    )
}

export default PortfolioCard
