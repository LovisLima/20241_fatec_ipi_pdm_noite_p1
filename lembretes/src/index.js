
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        // container principal
        <div className="container border rounded mt-2" style={{backgroundColor: 'palegreen'}}>
        {/* linha para o título */}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Hello, lembretes</h1>
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

ReactDOM.render(
<App />,
document.querySelector('#root')
)