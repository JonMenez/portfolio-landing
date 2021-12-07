import * as React from 'react';
import img from '@images/picFeed.svg';
import '@styles/cardFeed.scss';

const CardFeed = () => {
    return (
        <div className="cardFeed">
            <div className="cardFeed__card">
               <img className="cardFeed__img" src={ img } alt="feedback photo" />
               <div className="cardFeed__text">
                   <h4 className="cardFeed__title">Full name</h4>
                   <span className="cardFeed__span">Position</span>
               </div>
            </div>
            <p className="cardFeed__body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias esse quas sed magni eveniet quasi iusto, odio est illum iste dicta mollitia aspernatur quidem laudantium inventore culpa harum accusamus quo!</p>
        </div>
    )
}

export default CardFeed
