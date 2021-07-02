import { useState, useEffect, Fragment } from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [loading, setloading] = useState(false);
  const [select, setselect] = useState("");


  function Planeta(props) {
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
      Promise.all(props.urls.map((url) => fetch(url)))
        .then(respuesta => Promise.all(respuesta.map(res => res.json())))
        .then(datos => { setPersonajes(datos) })
    }, [setdata2]);

    const personajeHTML = personajes.map(personajes => { return <li>{personajes.name}</li> })

    return <ul>{personajeHTML}</ul>
  }
  useEffect(() => {
    setloading(true);
    fetch("https://swapi.dev/api/planets")
      .then(results => results.json())
      .then(data => {
        setdata(data.results);
        setloading(false)
      })
  }, [])
  let mostrarPlanetas = data.map((planeta, index) => {
    return <option value={planeta.url}>{planeta.name}</option>
  })

  useEffect(() => {
    setloading(true);
    fetch(select)
      .then(res => res.json())
      .then(datos => {
        setdata2(datos.residents);
        setloading(false)
      })
  }, [select])

  if (!loading) {
    return (
      <Fragment>
        <select onChange={(e) => { setselect(e.target.value) }}>{mostrarPlanetas}</select>
        <Planeta urls={data2} />
      </Fragment>

    );
  } else {
    return <h1>cargando....</h1>
  }


}

export default App;
