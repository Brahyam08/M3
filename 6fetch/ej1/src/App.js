import { useState, useEffect, Fragment } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")
  const [data, setData] = useState([])
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState("")

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(datos => {
        setNext(datos.info.next);
        setPrev(datos.info.prev);
        setData(datos.results.slice(0, 10));
      })
  }, [url])



  let personajes = data.map((personaje, index) => {
    return (
      <div key={index}>
        <img src={personaje.image} alt={personaje.name} />
        <h5>{personaje.name}</h5>
      </div>
    )
  })

  return (
    <Fragment>
      <div className='catalogo'>{personajes}</div>
      <button onClick={() => prev !== null ? setUrl(prev) : setUrl("https://rickandmortyapi.com/api/character")}>Anterior</button>
      <button onClick={() => setUrl(next)}>Siguiente</button>
    </Fragment>
  );
}

export default App;
