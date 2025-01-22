## ACTIVIDAD-2

Supongamos que estás trabajando con una colección de objetos que representan diferentes obras de arte en una galería. Cada objeto contiene información sobre el artista, el año de la obra, el título, y si está actualmente en exhibición.

Del siguiente objeto:

const ArtGallery = [ 
 { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
 { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
 { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
 { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
 { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
 { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
 { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
 { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
 { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
 { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
 ];

Actividades:

1. Usa forEach y Template Strings para mostrar los títulos de las obras por consola en el formato:
"La obra TITULO DE OBRA por el autor AUTOR DE LA OBRA (AÑO) NO SE/SE encuentra exhibida"

2. Usa map para crear un nuevo array que contenga solo los títulos de las obras y muéstralo en consola.

3. Usar filter para crear un array de obras que están actualmente en exhibición y mostrarlas por consola.

4. Crear una función de búsqueda que reciba como parámetro un título de obra, y que utilice find para buscar esa obra específica

5. Usa some para verificar si hay obras en la galería de un año específico (por ejemplo, 1503).

6. Emplea every para comprobar si todas las obras son previas a un cierto año, por ejemplo tu año de nacimiento.

7. Usa findIndex para encontrar la posición en el array de una obra específica.

8. Agregar una función que permita añadir nuevas obras al array galería

9. Agregar una función que permita cambiar el estado de isExhibited de una obra específica enviándole el id

















```js
function addArtwork(newArtwork) {
  if (
    newArtwork &&
    typeof newArtwork.id === "number" &&
    typeof newArtwork.artist === "string" &&
    typeof newArtwork.title === "string" &&
    typeof newArtwork.year === "number" &&
    typeof newArtwork.isExhibited === "boolean"
  ) {
    ArtGallery.push(newArtwork);
    return "Obra añadida con éxito";
  } else {
    return "Datos inválidos. Asegúrate de incluir: id (número), artist (string), title (string), year (número) e isExhibited (boolean).";
  }
}

// Ejemplo de uso:
console.log(
  addArtwork({ id: 11, artist: "Goya", title: "The Third of May 1808", year: 1814, isExhibited: true })
);
console.log(ArtGallery);
```

```js
function toggleExhibitionStatus(id) {
  const artwork = ArtGallery.find((art) => art.id === id);
  if (artwork) {
    artwork.isExhibited = !artwork.isExhibited; // Cambia el estado a su opuesto
    return `El estado de exhibición de la obra '${artwork.title}' ha sido cambiado a ${artwork.isExhibited ? "exhibida" : "no exhibida"}.`;
  } else {
    return "Obra no encontrada";
  }
}

// Ejemplo de uso:
console.log(toggleExhibitionStatus(3)); // Cambia el estado de la obra con id 3
console.log(ArtGallery); // Muestra el array actualizado
````