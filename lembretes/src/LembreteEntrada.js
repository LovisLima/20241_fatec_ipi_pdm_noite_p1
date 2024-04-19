import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LembreteEntrada() {
    // Estado para armazenar o lembrete atual digitado pelo usuário
    const [lembrete, setLembrete] = useState('');
    // Estado para armazenar o lembrete atual digitado pelo usuário
    const [lembretes, setLembretes] = useState([]);

    // Função para atualizar o estado 'lembrete' conforme o usuário digita
    const handleInputChange = (event) => {
        setLembrete(event.target.value);
    };

    // Função para adicionar um lembrete à lista de lembretes quando clicar no botão 'Adicionar'
    const adicionarLembrete = () => {
        if (lembrete.trim() !== '') {
            // Adiciona o lembrete atual à lista de lembretes
            setLembretes([...lembretes, lembrete]);
            // Limpa o campo de texto após adicionar o lembrete
            setLembrete('');
            // Renderiza a lista de lembretes após a adição
        }
    };

    const [isMouseOver, setIsMouseOver] = useState(false);

    // Renderiza o componente
    return (
        // Estilo para deixar o conteiner principal centralizado
        <div className="container border rounded p-4 mt-8" style={{ maxWidth: '500px', backgroundColor: '#c1e5b8', padding: '20px', borderRadius: '10px' }}>
            <h1 className="text-center mb-4">Adicionar Lembrete</h1>
            <div className="d-flex flex-column align-items-center">
                <input
                    className={`form-control mb-3 ${isMouseOver ? 'border border-dark' : ''}`}
                    type="text"
                    value={lembrete}
                    onChange={handleInputChange}
                    placeholder="Digite um lembrete..."
                    onMouseEnter={() => setIsMouseOver(true)}
                    onMouseLeave={() => setIsMouseOver(false)}
                />
                <button
                    className="btn btn-success btn-lg mb-3"
                    onClick={adicionarLembrete}
                >
                    Adicionar
                </button>
                <table className="table table-striped table-bordered table-light">
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
            </div>
        </div>
    );
}

export default LembreteEntrada;
