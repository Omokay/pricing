import React, { Component } from 'react';
import './pricing.styles.scss';
import PriceData from '../../Data/pricing_data';
import Cards from '../Cards/card.component.jsx';
import '../Cards/card.styles.scss';


class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pricing: PriceData,
            plan: ''
        };

    }
    handleClick = (e) => {
        this.setState({
            plan: e.target.value
        });
        console.log(this.state.plan);
    };

    render() {
        const { pricing, plan } = this.state;
        return (
            <div>
                <div className='header'>
                    <h2>Subscribe to our plans today</h2>
                </div>

                <section className="pricing py-5">
                    <div className="container">
                        <div className='row'>
                            {pricing.map(({ key, ...otherCollections }) => (
                                <Cards key={key} {...otherCollections} handleClick={this.handleClick} plan={plan} />
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Pricing;