import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Catalogo = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const response = await fetch('./pelis.json');
                const data = await response.json();
                setPeliculas(data.results);
            } catch (error) {
                console.error('Error al cargar las películas:', error);
            }
        };

        fetchPeliculas();
    }, []);

    return (
        <>
        <div className='catalogo-container'>
            <h1 className='catalogo-h1'>Catálogo de Películas</h1>
                <ul className='catalogo-pelicula' >
                    {peliculas.map((pelicula) => (
                        <li className='catalogo-card' key={pelicula.id}>
                            <h2>{pelicula.title}</h2>
                            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${pelicula.poster_path}`} alt={pelicula.original_title} />
                            <Link to={`/infoPeli/${pelicula.id}`}>Ver más</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Catalogo;