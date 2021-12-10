import  * as React  from 'react';
import '@styles/cardServices.scss';


const CardServices = ({data}) => {
    return (
        <div className="services__item">
            <img className="services__img" src={data.image} alt="" />
            <div className="services__text">
                <h3 className="services__title">{data.title}</h3>
                <p className="services__body">{data.info }</p>
            </div>
        </div>
    )
}

export default CardServices
