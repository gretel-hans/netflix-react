import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const MyNavbar = () => (
    <header>


        <Navbar className="navbar pb-3" expand="lg" data-bs-theme="dark">
            <Container fluid className="container-fluid align-center p-0">
                
                <a className="navbar-brand" href="void:javascript(0)"><img src="../assets/netflix_logo.png" alt="Netflix Logo" /></a>
                <div className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </div>
                <div className="collapse navbar-collapse align-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" id='link' href="void:javascript(0)">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active link" id='link' href="void:javascript(0)">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='link' href="void:javascript(0)">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='link' href="void:javascript(0)">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='link' href="void:javascript(0)">My List</a>
                        </li>
                    </ul>

                    <div className="d-flex justify-content-between align-items-center d-none d-lg-flex" id="navRight">
                        <div><i className="bi bi-search fs-5"></i></div>
                        <div>KIDS</div>
                        <div><i className="bi bi-bell-fill fs-5"></i></div>
                        <div>
                        
                            <li className="nav-item dropstart list-unstyled" id="marker">
                                <Dropdown>
                                <Dropdown.Toggle id="generesDropdownII">
                                    <img src="../assets/avatar.png" width="20px" alt="" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-light">
                                <Dropdown.Item href="#/action-1">Epicode</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Pippo</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Pluto</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>                             
                                </Dropdown.Menu>
                                 </Dropdown>
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
                    <Dropdown>
                        <Dropdown.Toggle id="generesDropdown">
                            <span>Generes</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-light">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Series</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Documentaries</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                    <div id="heroIcons">
                        <span><i className="bi bi-text-left"></i></span>
                        <span><i className="bi bi-arrows-fullscreen"></i></span>
                    </div>
                </div>

            </div>
        </div>


    </header>

)

export default MyNavbar