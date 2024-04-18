import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function LembreteEntrada() {
    // Estado para armazenar o lembrete atual digitado pelo usuário
    const [lembrete, setLembrete] = useState('');
    // Estado para armazenar a lista de lembretes adicionados
    const [lembretes, setLembretes] = useState([]);

    // Função para atualizar o estado 'lembrete' conforme o usuário digita
    const handleInputChange = (event) => {
        setLembrete(event.target.value);
    };

    // Função para adicionar um lembrete à lista de lembretes quando clicar no botão 'Adicionar'
    const adicionarLembrete = () => {
        if (lembrete !== '') {
            // Adiciona o lembrete atual à lista de lembretes
            setLembretes([...lembretes, lembrete]);
            // Limpa o campo de texto após adicionar o lembrete
            setLembrete('');
            // Renderiza a lista de lembretes após a adição
            return (
                <ul>
                    {lembretes.map((item, index) => (
                        <tr key={lembretes.index} style={{ border: "none" }}>
                            <td>{lembretes.item}</td>
                        </tr>
                    ))}
                </ul>
            );
        }
        return null;
    };

    // Renderiza o componente
    return (
        <div>
            <table className="table table-striped table-bordered table-primary">
                <thead>
                    <tr>
                        <th>Lembrete:</th>
                    </tr>
                </thead>
                <tbody>
                    {lembretes.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Adicionar Lembrete</h1>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "25px", border: "none" }}>
                <input
                    style={{
                        marginBottom: "10px",
                        borderRadius: "25px",
                        border: "none",
                        boxShadow: "insert 0 0 0 2px white",
                        fontSize: "2rem",
                        textAlign: "center",
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