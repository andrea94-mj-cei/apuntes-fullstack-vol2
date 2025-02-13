import { Testimonio } from "./Testimonio";

export const ListaTestimonios = ({testimonios}) => {
    return ( 
        <>
        {
            testimonios.map((testimonio, id)=>(
                <Testimonio key={id} {...testimonio}/>
            ))
        }
        </>
     );
}