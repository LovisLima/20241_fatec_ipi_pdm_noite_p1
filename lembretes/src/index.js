import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import LembreteEntrada from './LembreteEntrada'
import TarefaLista from './LembreteLista'

const App = () => {
    return (
        // container principal
        <div className="container border rounded mt-2" style={{ backgroundColor: 'palegreen' }}>
            {/* linha para o título */}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center"><TarefaLista /></h1>
            </div>
            {/* sub-linha*/}
            <div className="row justify-content-center">
                <div className="col-sm d-flex justify-content-center">
                    Conteúdo da primeira coluna aqui
                </div>
                <div className="col-sm d-flex justify-content-center">
                    Conteúdo da segunda coluna aqui
                </div>
            </div>
        </div>

    );
}

const App2 = () => {
    return (
        <div>
            <LembreteEntrada />
        </div>
    );

}
export default App2;

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)