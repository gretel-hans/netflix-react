
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const MyNavbar=()=>(
            <header>

            
            <Navbar className="navbar pb-3" expand="lg" data-bs-theme="dark">
            <Container fluid className="container-fluid align-center p-0">
                <a className="navbar-brand" href="void:javascript(0)"><img src="../assets/netflix_logo.png" alt="Netflix Logo"/></a>
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse align-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="void:javascript(0)">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="void:javascript(0)">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="void:javascript(0)">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="void:javascript(0)">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="void:javascript(0)">My List</a>
                        </li>
                    </ul>

                    <div className="d-flex justify-content-between align-items-center d-none d-lg-flex" id="navRight">
                        <div><i className="bi bi-search fs-5"></i></div>
                        <div>KIDS</div>
                        <div><i className="bi bi-bell-fill fs-5"></i></div>
                        <div>

                            <li className="nav-item dropstart list-unstyled" id="marker">
                                <a className="nav-link dropdown-toggle" href="void:javascript(0)" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img src="../assets/avatar.png" width="20px" alt=""/>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="void:javascript(0)">Epicode</a></li>
                                    <li><a className="dropdown-item" href="void:javascript(0)">Pippo</a></li>
                                    <li><a className="dropdown-item" href="void:javascript(0)">Pluto</a></li>
                                    <li><a className="dropdown-item" href="void:javascript(0)">Settings</a></li>
                                </ul>
                            </li>
                        </div>
                    </div>

                </div>
            </Container>
        </Navbar>
        <div className="d-none d-lg-block">
            <div id="hero">
                <h2>TV Shows</h2>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="generesDropdown">
                            <span>Generes</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark text-light">
                            <li><a className="dropdown-item" href="void:javascript(0)">Action</a></li>
                            <li><a className="dropdown-item" href="void:javascript(0)">Series</a></li>
                            <li><a className="dropdown-item" href="void:javascript(0)">Thriller</a></li>
                            <li><a className="dropdown-item" href="void:javascript(0)">Documentaries</a></li>
                        </ul>
                    </div>
                    <div id="heroIcons">
                        <span><i className="bi bi-text-left"></i></span>
                        <span><i className="bi bi-arrows-fullscreen"></i></span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
        </header>
    
)

export default MyNavbar