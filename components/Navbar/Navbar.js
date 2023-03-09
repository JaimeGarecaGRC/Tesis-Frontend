import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <a className="navbar-item" href="jaimegareca.com">
                    <img src="https://cookie-cdn.cookiepro.com/logos/a75b7931-d048-433d-952a-58f1a48a7439/3f89d767-ecde-4b64-9683-f67ef5b18526/76d89e59-4124-4f2e-b7db-8f582fdbe3d0/IQVIA-Logo---White.png" alt="Logo" width="112" height="28" />
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="http://localhost:5000">
                        Menu Principal
                    </a>
                    <a className="navbar-item" href="http://localhost:5000/dashboard">
                        Dashboard
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Nombre Usuario
                        </a>
                        <div className="navbar-dropdown is-right is-boxed">
                            <a className="navbar-item" href="http://localhost:5000/perfil">
                                Perfil
                            </a>
                            <a className="navbar-item" href="http://localhost:5000/tickets-problema">
                                Tickets de Problemas
                            </a>
                            <a className="navbar-item" href="http://localhost:5000/articulos/historial">
                                Historial de Articulos
                            </a>
                            <a className="navbar-item" href="http://localhost:5000/login">
                                Salir
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;