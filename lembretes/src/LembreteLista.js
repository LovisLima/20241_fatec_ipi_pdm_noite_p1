// Importar a biblioteca React e o hook useState do React
import React, { useState } from 'react';

// Importar o componente LembreteEntrada do arquivo './LembreteEntrada'
import LembreteEntrada from './LembreteEntrada';


// Definição do componente funcional TarefaLista
const TarefaLista = () => {
  // Inicializar um array vazio 'tarefas' (tarefas) usando o hook useState
  const [tarefas, setTarefas] = useState([]);

  // Função para lidar com a adição de um novo lembrete
  const handleAddReminder = (newReminder) => {
    // Atualizar o array 'tarefas' adicionando um novo objeto com id e descricao (descrição)
    setTarefas([...tarefas, { id: tarefas.length + 1, descricao: newReminder }]);
  };

  // Declaração JSX return para renderizar o componente
  return (
    <div className="container mt-4" style={{ borderRadius: '80px' }}>
      <table className="table table-bordered" style={{ borderRadius: '80px' }}>
        <tbody>
          {/* Renderizar lembretes existentes e novos */}
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td className="py-3 rounded-pill border-2" style={{ backgroundColor: 'white', borderRadius: '15px' }}>{tarefa.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <LembreteEntrada onAddReminder={handleAddReminder} />
    </div>
  );
};

// Exportar o componente TarefaLista como exportação padrão
export default TarefaLista;
