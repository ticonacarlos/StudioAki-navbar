import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Logosa from './componentes/imgs/Logo.png'
// import Banner from './componentes/imgs/studio.jpg'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {
 
  render() {
    return (
      
      <div className='banner'>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-custom">

        <div class="container-fluid" >
          <a class="navbar-brand" href="#">
            <img src={Logosa} alt="" width="100" height="100" class="d-inline-block align-text-top me-2"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark"  href="#">Ensaio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark"  href="#">Gravação</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark"  href="#">Contato</a>
              </li>
                
            </ul>
          </div>
          
        </div>
      </nav>

        

        
      {/* Texto só pra ter uma noção */}

        <div className="content">
          <h1>ENCONTRE SEU STUDIO</h1>
          <p>seja para gravar ou ensaiar,
            <br/> aqui você vai encontrar o studio que esta peocurando</p>
            <div>
              <button type='button'><span> </span> SAIBA MAIS</button>
              <button type='button'><span> </span>VEJA OS STUDIOS</button>
            </div>
          
        </div>

      </div>

    )
  }
}


ReactDOM.render(
  <App />,
  document.querySelector("#root")
)


