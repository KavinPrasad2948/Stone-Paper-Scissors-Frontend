import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { GameWrapper, PlayerInput, ChoiceButton, ResultMessage, SubmitButton } from './Game.styled';

const choices = ['Stone', 'Paper', 'Scissors'];

const Game = ({ onGameData }) => {
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [player1Choice, setPlayer1Choice] = useState('');
    const [player2Choice, setPlayer2Choice] = useState('');
    const [result, setResult] = useState('');
    const [round, setRound] = useState(1);
    const [gameData, setGameData] = useState([]);

    const determineWinner = () => {
        if (player1Choice === player2Choice) return 'It\'s a Tie!';
        if (
            (player1Choice === 'Stone' && player2Choice === 'Scissors') ||
            (player1Choice === 'Scissors' && player2Choice === 'Paper') ||
            (player1Choice === 'Paper' && player2Choice === 'Stone')
        ) {
            return `${player1Name} Wins!`;
        }
        return `${player2Name} Wins!`;
    };

    const handleSubmit = async () => {
        if (player1Choice && player2Choice) {
            const currentRoundResult = determineWinner();
            setResult(currentRoundResult);
    
            // Save the current round data
            const newRoundData = {
                round,
                player1: player1Name,
                player2: player2Name,
                player1Choice: player1Choice,
                player2Choice: player2Choice,
                result: currentRoundResult,
            };
    
            // Log data for debugging
            console.log('Posting new round data:', newRoundData);
    
            // Add the current round data to game data
            const updatedGameData = [...gameData, newRoundData];
            setGameData(updatedGameData);
            setRound(round + 1);
    
            // Post the game data to the backend
            try {
                const response = await axios.post('https://stone-paper-scissors-backend.onrender.com/api/games/create', newRoundData);
                console.log('Data posted successfully:', response.data);
            } catch (error) {
                console.error('Error posting game data:', error.response ? error.response.data : error.message);
            }
    
            // Pass the game data to the parent component (App)
            onGameData(updatedGameData);
    
            // Reset choices for the next round
            setPlayer1Choice('');
            setPlayer2Choice('');
        } else {
            alert('Please select choices for both players.');
        }
    };
    

    return (
        <GameWrapper>
            <h2>Stone Paper Scissors</h2>
            <PlayerInput 
                type="text" 
                placeholder="Player 1 Name" 
                value={player1Name} 
                onChange={(e) => setPlayer1Name(e.target.value)} 
            />
            <PlayerInput 
                type="text" 
                placeholder="Player 2 Name" 
                value={player2Name} 
                onChange={(e) => setPlayer2Name(e.target.value)} 
            />

            <h3>Select Choices (Round {round}):</h3>
            {choices.map((choice) => (
                <div key={choice}>
                    <ChoiceButton onClick={() => setPlayer1Choice(choice)}>
                        {choice} (P1)
                    </ChoiceButton>
                    <ChoiceButton onClick={() => setPlayer2Choice(choice)}>
                        {choice} (P2)
                    </ChoiceButton>
                </div>
            ))}
            
            <SubmitButton onClick={handleSubmit}>Submit Choices</SubmitButton>

            {result && <ResultMessage>{result}</ResultMessage>}
        </GameWrapper>
    );
};

Game.propTypes = {
    onGameData: PropTypes.func.isRequired,
};

export default Game;
