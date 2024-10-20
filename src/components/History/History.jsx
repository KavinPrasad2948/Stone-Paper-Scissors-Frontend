import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { HistoryWrapper, HistoryItem } from './History.styled';

const History = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('https://stone-paper-scissors-backend.onrender.com/api/games');
                setGames(response.data);
            } catch (error) {
                console.error('Error fetching game history:', error);
                setError('Error fetching game history.');
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    return (
        <HistoryWrapper>
            <h3>Game History</h3>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                games.length > 0 ? (
                    games.map((game) => (
                        <HistoryItem key={game._id}>
                            {game.player1} vs {game.player2} - Result: {game.result}
                        </HistoryItem>
                    ))
                ) : (
                    <p>No game history available.</p>
                )
            )}
        </HistoryWrapper>
    );
};

History.propTypes = {};

History.defaultProps = {};

export default History;
