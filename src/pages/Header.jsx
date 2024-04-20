import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col">
                    <link to="/">  <img src="H:\2024 ARQUITECTURA DE DATOS\ENTORNO WEB\myapp\src\img\logo.jpg" alt="Logo" width={180} /> </link>
                </div>
                <div className="col">
                    <ul class="nav d-flex justify-content-end align-items-center" >
                        <li class="nav-item">

                            <Link class="nav-link text-light" aria-current="page" to="/">/Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link  text-light" to="/Reservar">Reservar</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link  text-light" to="/Experiencias">Emperiencias</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link disabled" to="#">Nosotros</Link>
                        </li>
                    </ul>



                </div>
            </div>
        </div>

    )
}

export default Header;