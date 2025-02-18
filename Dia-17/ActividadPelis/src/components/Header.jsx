import { NavLink } from "react-router";

export const Header = () => {
    return ( 
        <>
        <header>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/catalogo">Catálogo</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/info">Información</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
     );
}