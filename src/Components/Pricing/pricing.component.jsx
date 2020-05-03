import React, { Component } from 'react';
import './pricing.styles.scss';
import PriceData from '../../Data/pricing_date';
import { Card } from 'antd';

const { Meta } = Card;


class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priceList: PriceData
        };
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <h2>Subscribe to our plans today</h2>

                </div>
                <div className='row'>
                    <div className='column'>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </div>
                    <div className='column'>

                    </div>
                    <div className='column'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;