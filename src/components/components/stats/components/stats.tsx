import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import 'primereact/inputnumber';
import 'primereact/button';

import 'primeicons/primeicons.css';
        
function Stats({ player, onStatChange }) {
  const handleStatChange = (statName, value) => {
    onStatChange(player.id, statName, value);
  };

  return (
    <tr>
      <td>{player.name}</td>
      <td>
        <Button icon="pi pi-minus" onClick={() => handleStatChange('kills', player.kills - 1)} />
        <InputNumber
          value={player.kills}
          onValueChange={(e) => handleStatChange('kills', e.value)}
          mode="decimal"
        />
        <Button icon="pi pi-plus" onClick={() => handleStatChange('kills', player.kills + 1)} />
      </td>
      <td>
        <Button icon="pi pi-minus" onClick={() => handleStatChange('kills', player.kills - 1)} />
        <InputNumber
          value={player.kills}
          onValueChange={(e) => handleStatChange('kills', e.value)}
          mode="decimal"
        />
        <Button icon="pi pi-plus" onClick={() => handleStatChange('kills', player.kills + 1)} />
      </td>
      <td>
        <Button icon="pi pi-minus" onClick={() => handleStatChange('kills', player.kills - 1)} />
        <InputNumber
          value={player.kills}
          onValueChange={(e) => handleStatChange('kills', e.value)}
          mode="decimal"
        />
        <Button icon="pi pi-plus" onClick={() => handleStatChange('kills', player.kills + 1)} />
      </td>
      <td>
        <Button icon="pi pi-minus" onClick={() => handleStatChange('kills', player.kills - 1)} />
        <InputNumber
          value={player.kills}
          onValueChange={(e) => handleStatChange('kills', e.value)}
          mode="decimal"
        />
        <Button icon="pi pi-plus" onClick={() => handleStatChange('kills', player.kills + 1)} />
      </td>
      <td>
        <Button icon="pi pi-minus" onClick={() => handleStatChange('kills', player.kills - 1)} />
        <InputNumber
          value={player.kills}
          onValueChange={(e) => handleStatChange('kills', e.value)}
          mode="decimal"
        />
        <Button icon="pi pi-plus" onClick={() => handleStatChange('kills', player.kills + 1)} />
      </td>
    </tr>
  );
}

export default Stats;
