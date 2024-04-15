import React from 'react'
import { useState } from 'react'

function LembreteEntrada() {

    const [lembrete, setLembrete] = useState('');
    const [lembretes, setLembretes] = useState([]);

    const handleInputChange = (event) => {
        setLembrete(event.target.value);
    };

    const adicionarLembrete = () => {
        if (lembrete !== '') {
            setLembretes([...lembretes, lembrete]);
            setLembrete('');
        }
    };

    return (
        <div>
            <h2>Adicionar Lembrete</h2>
            <input
                type="text"
                value={lembrete}
                onChange={handleInputChange}
                placeholder="Digite um lembrete..."
            />
            <button onClick={adicionarLembrete}>Adicionar</button>

            <h3>Lembretes Cadastrados:</h3>
            <ul>
                {lembretes.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default LembreteEntrada;


