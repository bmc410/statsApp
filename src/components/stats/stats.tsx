import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import 'primereact/inputnumber';
import 'primereact/button';
import 'bootstrap/dist/css/bootstrap.css';

import 'primeicons/primeicons.css';
import StatColumn from '../statColumn/statColumn';

function Stats({ player, onStatChange }) {
  const handleStatChange = (statName, value) => {
    onStatChange(player.id, statName, value);
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: '5px', fontWeight: 'bold'}} >
        <span style={{width: '300px', textAlign: 'left'}}>{player.name}</span>
      </div>
      <div className="row">
        <div style={{ border: '1px solid black' }} className="col-1">
          S
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          SA
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          SE
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          AT
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          K
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          HE
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
         AST
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          D
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
         RE
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          BS
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          BE
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          BA
        </div>
      </div>
      <div className="row">
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
        <div style={{ border: '1px solid black' }} className="col-1">
          <StatColumn
            statValue={player.kills}
            onDecrement={() => handleStatChange('kills', player.kills - 1)}
            onIncrement={(e) => handleStatChange('kills', e.value)}
          />
        </div>
      </div>
    </div>
  )
  }

   

export default Stats;
