import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [username, setUsername] = useState('');
  const [postre, setPostre] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length < 3 || username.startsWith(' ') || postre.length < 6) {
      setError(true);
    } else {
      setError(false);
    }
  }
  return (
    <div className="App">

      <h1>Elige un Postre</h1>

      <form onSubmit={handleSubmit}>

        <label>
          Ingresa Tu Nombre:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <br />

        <label>
          Ingresa tu postre favorito:
          <input type="text" value={postre} onChange={(e) => setPostre(e.target.value)} />
        </label>

        <br />

        <button type="submit">Enviar</button>
      </form>
      
      {error ? <p>Por favor chequea que la información sea correcta</p> : <Card username={username} postre={postre} />}
    </div>
  )
}

export default App
