import React from 'react';
import './PlayerDetails.css';

const PlayerDetails = (props) => {
    const {name, img, role, salary} = props.player;
    const handleCollectHim = props.handleCollectHim;
    return (
        <div className="players-info">
            <h2>{name}</h2>
            <img src={img} alt="image"/>
            <p>{role}</p>
            <h4>{salary}</h4>
            <button onClick={()=>handleCollectHim(props.player)}>Add</button>
        </div>
    );
};

export default PlayerDetails;