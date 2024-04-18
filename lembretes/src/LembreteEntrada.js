import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


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
        // Renderiza a lista de lembretes após a adição
        return (
            <ul>
            {lembretes.map((item, index) => (
                <tr key={lembretes.index} style={{border: "none"}}>
                    <td className="py-3" style={{borderRadius: "100px", border: "2px"}}>{lembretes.item}</td>
                </tr>
            ))}
            </ul>
        );
        }
        return null;
    };


    return (
        <div>
            <h3>Lembretes Cadastrados:</h3>
            <ul>
                {lembretes.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            <h2>Adicionar Lembrete</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "25px", border: "none" }}>
                <input
                    style={{
                    marginBottom: "10px",
                    borderRadius: "25px",
                    border: "none",
                    boxShadow: "insert 0 0 0 2px white",
                    fontSize: "2rem",
                    }}
                    type="text"
                    value={lembrete}
                    onChange={handleInputChange}
                    placeholder="Digite um lembrete..."
                />
                <button
                    style={{
                    borderRadius: "25px",
                    border: "none",
                    boxShadow: "insert 0 0 0 2px white",
                    fontSize: "2rem",
                    }}
                    onClick={adicionarLembrete}
                >
                    Adicionar
                </button>
                </div>
            </div>

    );
}

export default LembreteEntrada;