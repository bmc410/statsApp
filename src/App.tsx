import React, { useState } from 'react';
import './App.css';
import Stats from './components/stats/stats';


function App() {
  const initialPlayers = [
    { id: 1, name: 'Bill', kills: 0 }, // Add more players here
    { id: 2, name: 'Kadi', kills: 0 },
    // ... Add more players up to 12
  ];

  const [players, setPlayers] = useState(initialPlayers);

  const handleStatChange = (playerId, statName, value) => {
    const updatedPlayers = players.map(player => {
      if (player.id === playerId) {
        return { ...player, [statName]: value };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  return (
    <div className="App" style={{padding:'10px'}}>
      <h1>Volleyball Player Stats Tracker</h1>
      
      <table className="player-table">
        <tbody>
          {players.map(player => (
            <Stats key={player.id} player={player} onStatChange={handleStatChange} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
