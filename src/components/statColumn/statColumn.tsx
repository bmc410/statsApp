import React from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import 'primereact/inputnumber';
import 'primereact/button';
import './statColumnStyle.css'
import 'primeflex/primeflex.css';

function StatColumn({ statValue, onDecrement, onIncrement }) {
  return (
    <td style={{border: 'none'}}>
        <div className="row" style={{margin:'0px', display: 'flex', justifyContent: 'center'}}>
          <div style={{padding:'0px'}} className="col-5">
            <Button  style={{width:'100%'}} icon="pi pi-minus" onClick={onDecrement} />
          </div>
          <div style={{padding: '0px'}} className="col-1">
            &nbsp;
          </div>
          <div style={{padding: '0px'}} className="col-5">
            <Button style={{width:'100%'}}  icon="pi pi-plus" onClick={onIncrement} />          
          </div>
        </div>
        <div className="row"> 
          <div className="col-12">
            <InputNumber
              style={{ padding: '8px' }}
              value={0}
              onValueChange={onIncrement}
              mode="decimal"
            />          
          </div>
        </div>
    </td>
  );
}

export default StatColumn;
