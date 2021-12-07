import * as React from 'react'
import CardFeed from '@components/CardFeed'
import '@styles/feedbacks.scss'

const Feedbacks = () => {
    return (
        <section className="feedbacks">
            <h4 className="feedbacks__title feedbacks__title--main">We really care about what you have to say!</h4>
            <CardFeed />
            <h4 className="feedbacks__title">every opinion we receive help us a lot</h4>
        </section>
    )
}

export default Feedbacks
