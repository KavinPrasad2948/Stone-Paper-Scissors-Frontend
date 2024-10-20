import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ScoreboardWrapper, ScoreItem } from './Scoreboard.styled';

const Scoreboard = ({ gameData }) => {

    const postGameData = async () => {
        console.log('Posting game data:', gameData);  // Add this line to check the gameData structure
        try {
            const response = await axios.post('http://localhost:5000/api/games/create', gameData);
            console.log('Data posted successfully:', response.data);
        } catch (error) {
            console.error('Error posting game data:', error);
        }
    };
    

    // Use Effect to post the gameData when the component mounts or gameData changes
    useEffect(() => {
        if (gameData.length > 0) {
            postGameData(); // Post the data only if there's game data available
        }
    }, [gameData]);

    return (
        <ScoreboardWrapper>
            <h3>Scoreboard</h3>
            {gameData.length > 0 ? (
                gameData.map((game, index) => (
                    <ScoreItem key={index}>
                        Round {game.round}: {game.player1} vs {game.player2} - Result: {game.result}
                    </ScoreItem>
                ))
            ) : (
                <p>No games played yet.</p>
            )}
        </ScoreboardWrapper>
    );
};

// Default props in case gameData is not passed
Scoreboard.defaultProps = {
    gameData: [],
};

// PropTypes validation
Scoreboard.propTypes = {
    gameData: PropTypes.arrayOf(
        PropTypes.shape({
            player1: PropTypes.string.isRequired,
            player2: PropTypes.string.isRequired,
            result: PropTypes.string.isRequired,
            round: PropTypes.number.isRequired,
        })
    ),
};

export default Scoreboard;
