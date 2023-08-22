import React, { useState } from 'react';
import './App.css';
import Stats from './components/components/stats/components/stats';

function App() {
  const initialPlayers = [
    { id: 1, name: 'Player 1', kills: 0 }, // Add more players here
    { id: 2, name: 'Player 2', kills: 0 },
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
    <div className="App">
      <h1>Volleyball Player Stats Tracker</h1>
      <table className="player-table">
        <thead>
          <tr>
            <th></th>
            <th>Kills</th>
            <th>Aces</th>
            <th>Attempts</th>
            <th>ServeError</th>
            <th>ReceiveError</th>
            {/* Add more header columns for other stats */}
          </tr>
        </thead>
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
