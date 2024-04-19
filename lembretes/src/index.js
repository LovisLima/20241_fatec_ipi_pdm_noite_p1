import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import LembreteEntrada from './LembreteEntrada'
import "./personalizacao.css";

const App = () => {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="container border rounded p-4" style={{ backgroundColor: '#72ad75', borderRadius: "10px" }}>
                <div className="row border-bottom mb-3">
                    <h1 className="display-5 text-center"><LembreteEntrada /></h1>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
