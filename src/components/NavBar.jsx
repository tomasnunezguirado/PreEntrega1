import CartWidget from "./CartWidget";

const NavBar = ()=>{
    return(
        <>
    <nav className="navbar">
        <ul className="nav-container">
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Productos</a></li>
            <li><a href="/">Sobre Nosotros</a></li>
            <li><a href="/">Sucursales</a></li>
            <li ><a href="/"><CartWidget/></a></li>
        </ul>

    </nav>
    </>
    )
}

export default NavBar;