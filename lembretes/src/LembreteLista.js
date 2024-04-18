/* esse arquivo não é mais necessário, pois o código foi transferido para o arquivo LembreteEntrada.js */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


//Declara a lista de tarefas fictícias
const TarefaLista = () => {
    const tarefas = [
        { id: 1, descricao: 'Preparar aula de programação' },
        { id: 2, descricao: 'Fazer feira' },
        { id: 3, descricao: 'Preparar marmitas' }
    ];
    //Retorna a lista de tarefas
    //Função map para percorrer a lista de tarefas
    return (
        //container mt-4 centraliza e define a margem superior
        //table table-bordered tabela com bordas
        //py-3 preenchimento vertical nas células
        <div className="container mt-4">
            <table className="table table-bordered">
                <tbody>
                    {tarefas.map(tarefa => (
                        //O atributo key é usado para identificar exclusivamente cada elemento na lista e é importante para a eficiência do React na renderização de listas.
                        <tr key={tarefa.id}>
                            <td className="py-3">{tarefa.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TarefaLista;