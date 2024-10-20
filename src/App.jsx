import React, { useState } from 'react';
import Game from './components/Game/Game';
import History from './components/History/History';
import Scoreboard from './components/Scoreboard/Scoreboard';

const App = () => {
   const [gameData, setGameData] = useState([]);

   const handleGameData = (data) => {
       setGameData(data);
   };

   return (
      <div>
         <h1>Welcome to Stone Paper Scissors!</h1>
         <Game onGameData={handleGameData} />
         <Scoreboard gameData={gameData} />
         <History />
      </div>
   );
};

export default App;
