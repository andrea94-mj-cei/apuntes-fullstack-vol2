export const Testimonio = ({name, position, company, testimonial, image}) => {
    return ( 
        <>
        <div className="testimonio-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h3>Empresa: {company} / Cargo: {position}</h3>
            <p>Cualidades: {testimonial}</p>
        </div>
        </>
     );
}