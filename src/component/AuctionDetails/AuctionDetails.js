import React, { useState } from 'react';
import fakeData from '../../fakeData/players';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import Review from '../Review/Review';
import './AuctionDetails.css';


const AuctionDetails = () => {
    const allInfo = fakeData.slice(0, fakeData.lenght);
    const [player, setPlayer] = useState(allInfo);
    const [addPlayer, setAddPlayer] = useState([]);

    const handleCollectHim = (add) => {
        const addThem = [...addPlayer, add];
        setAddPlayer(addThem);
    }
    
    return (
        <div className="auction-container">
            <div className="player-details">
                <h2>Player details</h2>
                <ul>
                    {
                        player.map(cricketer => <PlayerDetails handleCollectHim={handleCollectHim} player={cricketer}></PlayerDetails> )
                    }
                </ul>
            </div>
            <div className="review-it">
                <Review added={addPlayer}></Review>                
            </div>
        </div>
    );
};

export default AuctionDetails;