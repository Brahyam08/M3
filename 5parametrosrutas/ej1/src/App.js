import { useState } from 'react'
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import './App.css';

function Saludar() {
  return <p>Hola {useParams().parametro}</p>

}

function App() {
  const [input, setInput] = useState("")
  return (
    <BrowserRouter>
      <Route exact path="/">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <Link to={`/saludo/${input}`}>Saludo</Link>
      </Route>
      <Route path="/saludo/:parametro">
        <Saludar />
      </Route>

    </BrowserRouter>
  );
}

export default App;
