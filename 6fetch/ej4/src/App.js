import { useState, useEffect, Fragment } from 'react';
import './App.css';

function Cartas(props) {
  let cartas = props.cartas.map((carta, index) => {
    return (
      <div key={index} className="carta">
        <img src={carta.imageUrl} alt={carta.name} />
        <h3>{carta.name}</h3>
        <h5>
          Tipo: {carta.type} | Coste : {carta.manaCost}
        </h5>
        <p>{carta.text}</p>
      </div>
    )
  })
  return <div className='catalago'>{cartas}</div>
}


function App() {

  const [data, setData] = useState([])
  const [data2, setdata2] = useState([])
  const [loading, setloading] = useState(false)
  const [loading2, setloading2] = useState(false)
  const [select, setselect] = useState('')

  useEffect(() => {
    setloading(true)
    fetch("https://api.magicthegathering.io/v1/sets")
      .then(res => res.json())
      .then(res => {
        setData(res.sets);
        setloading(false)
      })
  }, [])

  useEffect(() => {
    setloading2(true)
    fetch(`https://api.magicthegathering.io/v1/cards?set=${select}`)
      .then(res => res.json())
      .then(datos => {
        setdata2(datos.cards);
        setloading2(false)
      })
  }, [select])

  const sets = data.map((set, index) => {
    return (
      <option key={index} value={set.code}>{set.name}</option>
    )
  })

  if (loading) {
    return <h1> loading...</h1>
  } else {
    return (
      <Fragment>
        <select
          key='select'
          onChange={(e) => {
            setselect(e.target.value)
          }}
        >
          {sets}
        </select>
        {loading2 ? (<h1>loading...</h1>) : (<Cartas key='cartas' cartas={data2} />)}

      </Fragment>
    )
  }

}

export default App;
