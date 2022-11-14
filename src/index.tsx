import './index.css';
import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import CO from './original/calc';
import Calculator from "./fixed/Calculator";
import Calc from "./original/calc";

const container = document.getElementById('app-root')!;
const root = createRoot(container);

const App = () => {
    const [which, setWhich] = useState('ORIGINAL');
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button style={{padding: "8px"}} onClick={() => setWhich('ORIGINAL')}>Original</button>
                <button style={{padding: "8px"}} onClick={() => setWhich('FIXED')}>Fixed</button>
            </div>
            <p style={{padding: "8px", fontSize: "24px", textAlign: "center"}}>{which}</p>
            {which==='ORIGINAL' && <CO />}
            {which === 'FIXED' && <Calculator />}
        </div>
    )
}
root.render(<App />);
