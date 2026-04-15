import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <div id="esq"></div>
      <div id="dir">
      <img src={logo} alt="Logo" className="logo" />

      
        <label for="usuario">Entrar no Instagram</label>
        <input type="text" placeholder="Número de celular, nome de usuário ou email" />

        <input type="password" placeholder="Senha" />

        <div className="opcoes">
          <a href="#">esqueceu a senha?</a>
        </div>

        <button type="submit">ENTRAR</button>
        </div>
      </main>
    </>
  );
}
export default App;