console.log("Galería de arte");

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

console.log("Actividad 1");
ArtGallery.forEach((obra) => {
    const estado = obra.isExhibited ? "se encuentra exhibida" : "no encuentra exhibida";
    console.log(`La obra "${obra.title}" por el autor ${obra.artist} (${obra.year}) ${estado}`);
});

console.log("Actividad 2");
const titulos = ArtGallery.map((obra) => obra.title);
console.log(titulos);

console.log("Actividad 3");
const exhibidas = ArtGallery.filter((obra)=>obra.isExhibited);
console.log(exhibidas);

console.log("Actividad 4");
function buscarObra(title) {
    const obra = ArtGallery.find((nombre) => nombre.title.toLowerCase() === title.toLowerCase());
    return obra ? obra : "Obra no encontrada";
}
console.log(buscarObra("The kiss")); 

console.log("Actividad 5");
function yearObra(year) {
    return ArtGallery.some((obra) => obra.year === year);
}
console.log(yearObra(1503));

console.log("Actividad 6");
function antesDeNacimiento(year) {
    return ArtGallery.every((obra) => obra.year < year);
}
console.log(antesDeNacimiento(1994)); 

console.log("Actividad 7");
function posicionObra(title) {
    const posicion = ArtGallery.findIndex((artwork) => artwork.title.toLowerCase() === title.toLowerCase());
    return posicion !== -1 ? posicion : "Obra no encontrada";
}
console.log(posicionObra("mona lisa"));

console.log("Actividad 8");

console.log("Actividad 9");