import React, { Component } from 'react';
import './pricing.styles.scss';
import PriceData from '../../Data/pricing_data';
import Cards from '../Cards/card.component.jsx';


class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pricing: PriceData
        };
    }

    render() {
        const { pricing } = this.state;
        return (
            <div>
                <div className='header'>
                    <h2>Subscribe to our plans today</h2>
                </div>
                <div className='row'>
                    {pricing.map(({ title, ...otherCollections }) => (
                        <Cards key={title} {...otherCollections} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pricing;