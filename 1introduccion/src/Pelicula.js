function Pelicula(props) {
    const catalogo = props.videoclub.peliculas.map((pelicula, index) => {
        return (
            <div key={index} className="card">
                <img src={pelicula.cartel} alt={pelicula.titulo} />
                <div class="container">
                    <h4><b>{pelicula.titulo}</b></h4>
                    <p>{pelicula.sinopsis}</p>
                </div>
            </div>
        )
    })
    return (<div key='peliculas' className="catalogo">
        {catalogo}
    </div>)

}



export default Pelicula