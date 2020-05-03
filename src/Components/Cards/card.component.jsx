import React from 'react';

const Cards = ({ title, description, features, price_per_month, button, handleClick }) => {
    return (
        <React.Fragment>
            <div className='col-lg-4 col-sm-12'>
                    <div className='card mb-5 mb-lg-0'>
                    <div className='card-body'>
                        <h2 className='header text-uppercase text-center'><strong>{title}</strong></h2>
                        <h5 className='card-title text-muted text-uppercase text-center'>{description}</h5>
                        <h6 className='card-price text-center'>{price_per_month}<span className='period'>/month</span></h6>
                            <hr />
                            <ul className='fa-ul'>
                            {features.map((feat) => <li><span className='fa-li'><i className='fas fa-check'></i></span><strong>{feat}</strong></li>)}
            
                            </ul>
                        <button type='button' value={title} onClick={handleClick} className='btn btn-block btn-primary text-uppercase'>{button}</button>
                        </div>
                    </div>
                </div>
       </React.Fragment>
    )
};


export default Cards;