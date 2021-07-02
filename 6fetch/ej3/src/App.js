import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
function Lista(props) {
  let listaFinal = props.pokemons.map((bicho) => {
    return <li>{bicho}</li>
  })

  return <ul>{listaFinal}</ul>
}
function App() {
  const [data, setData] = useState([])
  const [data2, setdata2] = useState([])
  const [select, setSelect] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then(res => res.json())
      .then(datos => setData(datos.results))
  }, [])

  useEffect(() => {
    fetch(select)
      .then(res => res.json())
      .then(datos => {
        let arrayPokemon = []
        if (datos.pokemon.length >= 1) {
          for (let index = 0; index < 3; index++) {
            let rnd = Math.floor(Math.random() * datos.pokemon.length)
            arrayPokemon.push(datos.pokemon[rnd].pokemon.name)
          }
        } else {
          arrayPokemon.push(['No hay pokemon de este tipo'])
        }
        setdata2(arrayPokemon)
      })
  }, [select])

  let tipos = data.map(tipo => { return <option value={tipo.url}>{tipo.name}</option> })
  return (
    <Fragment>
      <select onChange={(e) => setSelect(e.target.value)}>{tipos}</select>
      <Lista pokemons={data2} />
    </Fragment>
  );
}

export default App;
