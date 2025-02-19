import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const InfoPeli = () => {
    const {id} = useParams();
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const response = await fetch('/pelis.json');
                const data = await response.json();
                const peliculaEncontrada = data.results.find(p => p.id === parseInt(id));
                setPelicula(peliculaEncontrada);
            } catch (error) {
                console.error('Error al cargar la película:', error);
            }
        };

        fetchPelicula();
    }, [id]);

    if (!pelicula) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <h1>{pelicula.title}</h1>
            <p>{pelicula.overview}</p>
            <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face${pelicula.poster_path}`} alt={pelicula.original_title} />
        </>
    );
}

export default InfoPeli;