import '@/css/App.css'

export const Producto = ({name, price, description, image}) => {



    return ( 
        <>
        <div className="producto-card">
            <img className='producto-img' src={image} alt={name} />
            <h2>{name}</h2>
            <p>Descripción del producto: {description}</p>
            <h3>{price} $</h3>
        </div>
        </>
     );
}