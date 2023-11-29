import { useState } from 'react';

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