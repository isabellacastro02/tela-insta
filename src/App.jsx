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

      
        <label for="usuario">USUÁRIO</label>
        <input type="text" placeholder="Digite seu usuário" />

        <label for="senha">SENHA</label>
        <input type="password" placeholder="Digite sua senha" />

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
