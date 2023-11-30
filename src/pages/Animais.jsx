import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Vacas from '../componentes/Vacas';




function Animais() {
    const [key, setKey] = useState('home');

    return (
        <div>
            <Vacas/>
        </div>
        
    );
}

export default Animais;