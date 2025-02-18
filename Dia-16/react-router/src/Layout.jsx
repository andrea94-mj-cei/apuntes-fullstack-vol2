import { Outlet, NavLink } from "react-router";

const Layout = () =>{
    return(
        <>
        <header>
        <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "text-red-500" : "text-back"} to="/blog">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog/5">Blog5</NavLink>
          </li>
          <li>
            <NavLink to="/blog/6">Blog6</NavLink>
          </li>
          <li>
            <NavLink to="/blog/hola/rojo">Jaume</NavLink>
          </li>
          <li>
            <NavLink to="/users/?id=25&name=ramiro">Ramiro</NavLink>
            <NavLink to="/users/?id=31&name=andrea">Andrea</NavLink>
          </li>
          </ul>
      </nav>
        </header>

        {/* los componentes "children serán renderizados en Outlet" */}
        <Outlet/>
        
        <footer>Soy footer</footer>
        </>
    )
}

export default Layout;