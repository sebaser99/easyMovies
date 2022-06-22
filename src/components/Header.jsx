import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const handleClick = ()=> {
        localStorage.setItem('token', '');
        navigate('/')
    }
    return (
        <>
            <header className="bg-secondary bg-gradient mb-4 p-3 text-light">
                <div className="d-flex justify-content-between container-sm">
                    <h2 className="mb-0">easy <br/>Movies</h2>
                    <nav className="navbar navbar-expand">
                        <ul className="navbar-nav container-fluid">
                            <li className="nav-link text-light" ><Link to='/home' />Home</li>
                            <li className="nav-link text-light" ><Link to='/listado'/>Listado</li>
                            <li className="nav-link text-light" ><Link to='/contacto' />Contacto</li>
                        </ul>
                    </nav>
                    <button className="btn btn-outline-warning" onClick={handleClick}>Salir</button>

                </div>
            </header>
        </>
    )
}