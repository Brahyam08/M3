import { useState } from "react";
import {
  BrowserRouter, Link,
  Route, useParams
} from 'react-router-dom'
import './App.css';
function Operacion() {
  let num1 = parseInt(useParams().num1)
  let num2 = parseInt(useParams().num2)

  return (<div>
    <p>sumar:{num1 + num2}</p>
    <p>restar:{num1 - num2}</p>
    <p>Multiplicar:{num1 * num2}</p>
    <p>dividir:{num1 / num2}</p>
    <p>resto:{num1 % num2}</p>
  </div>)

}
function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  return (
    <BrowserRouter>
      <div>
        <h1>{num1}</h1>
        <button onClick={() => setNum1(num1 + 1)}>Sumar</button>
        <button onClick={() => setNum1(num1 - 1)}>restar</button>
        <button onClick={() => setNum1(num1 + 10)}>+10</button>
        <button onClick={() => setNum1(num1 - 10)}>-10</button>
      </div>
      <div>
        <h1>{num2}</h1>
        <button onClick={() => setNum2(num2 + 1)}>+</button>
        <button onClick={() => setNum2(num2 - 1)}>-</button>
        <button onClick={() => setNum2(num2 + 10)}>+10</button>
        <button onClick={() => setNum2(num2 - 10)}>-10</button>
      </div>
      <div>
        <Link to={`/resultado/${num1}/${num2}`}>Ver resultados</Link>
        <button onClick={() => { setNum1(0); setNum2(0) }}>Poner a 0</button>
      </div>
      <Route path='/resultado/:num1/:num2'>
        <Operacion />
        <Link to='/'>volver</Link>
      </Route>

    </BrowserRouter>
  );
}

export default App;
