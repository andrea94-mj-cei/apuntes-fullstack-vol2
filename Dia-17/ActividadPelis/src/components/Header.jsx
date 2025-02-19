import { NavLink } from "react-router";

export const Header = () => {
    return ( 
        <>
        <header className="header">
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className="header-li"><NavLink to="/">Home</NavLink></li>
                    <li className="header-li"><NavLink to="/catalogo">Catálogo</NavLink></li>
                    <li className="header-li"><NavLink to="/perfil">Mi perfil</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
     );
}