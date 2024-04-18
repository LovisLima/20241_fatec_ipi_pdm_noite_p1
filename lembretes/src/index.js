import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import LembreteEntrada from './LembreteEntrada'
import "./personalizacao.css";

const App = () => {
    return (
        // container principal
        <div className="container border rounded mt-2" style={{ backgroundColor: '#72ad75', borderRadius: "10px" }}>
            {/* linha para o título */}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center"><LembreteEntrada /></h1>
            </div>
        </div>

    );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)