import  * as React  from 'react';
import CardServices from '@components/CardServices'
import {datas}  from "@components/ServicesList.js";
import '@styles/services.scss';

const Services = () => {
    return (
        <section className="services">
            <div className="services__card">
              <h2 className="services__main">How can i help you?</h2>
              { datas.map(data => <CardServices data={data} key={data.id} />) }
            </div>
        </section>
    )
}

export default Services
