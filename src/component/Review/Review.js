import React from 'react';
import './Review.css';

const Review = (props) => {
    console.log(props.added);
    const added = props.added;
    let detail = [];
    let totalCost = 0;
    for(let i = 0; i < added.length; i++) {
        let theirName = added[i].name; 
        let cost = added[i].salary;
        detail.push(theirName);
        totalCost += cost;
    }
    return (
        <div className="review-it">
            <h3>Chosen Players : {added.length}</h3>
            <p>Names : {detail}</p>
            <p>Total Amount : {totalCost}</p>
        </div>
    );
};

export default Review;