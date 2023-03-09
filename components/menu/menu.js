import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getCurrentPath, changeMenu } from '/components/menu/menu-logic.js';

const Menu = () => {

    const currentUrl = getCurrentPath();
    const { articuloId, documentoId} = useRouter().query;

    const [menuOptions, setMenuOptions] = useState([]);
    const [changer, setChanger] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            {
                setMenuOptions(JSON.parse(localStorage.getItem("menuData")));
            }
        }
    }, [changer]);
    
    return (
        <aside className="menu">
            <p className="menu-label" onClick = { () => console.log(menuOptions)}>
                Articulos
            </p>
            <ul className="menu-list">
                <li>
                    <a className={menuOptions[0] ? 'is-active' : ''} onClick = { () => {changeMenu(0); setChanger(changer + 1)}}>Articulos</a>
                    <ul className={menuOptions[0] ? '' : 'is-hidden'}>
                        <li><Link className={currentUrl == '/articulos' ? 'is-active' : ''} href="/articulos">Ver Articulos</Link></li>
                        <li><Link className={currentUrl == '/articulos/' + articuloId ? 'is-active' : ''} href="/articulos/1">Ver Articulo Especifico</Link></li>
                        <li><Link className={currentUrl == '/articulos/historial' ? 'is-active' : ''} href="/articulos/historial">Ver Historial de Articulos</Link></li>
                        <li><Link className={currentUrl == '/articulos/eliminar' ? 'is-active' : ''} href="/articulos/eliminar">Eliminar Articulos</Link></li>
                    </ul>
                </li>
                <li>
                <a className={menuOptions[1] ? 'is-active' : ''} onClick = { () => {changeMenu(1); setChanger(changer + 1)}}>Documentos</a>
                    <ul className={menuOptions[1] ? '' : 'is-hidden'}>
                    <li><Link className={currentUrl == '/documentos/subir-documentos' ? 'is-active' : ''} href="/documentos/subir-documentos">Subir Documentos</Link></li>
                        <li><Link className={currentUrl == '/documentos' ? 'is-active' : ''} href="/documentos">Ver Documentos</Link></li>
                        <li><Link className={currentUrl == '/documentos/' + documentoId ? 'is-active' : ''} href="/documentos/1">Ver Documento Especifico</Link></li>
                        <li><Link className={currentUrl == '/documentos/historial' ? 'is-active' : ''} href="/documentos/historial">Ver Historial de Documentos</Link></li>
                        <li><Link className={currentUrl == '/documentos/eliminar' ? 'is-active' : ''} href="/documentos/eliminar">Eliminar Documentos</Link></li>
                    </ul>

                </li>
                <li><a>Palabras Claves</a></li>
                <li><a>Tickets de Problemas</a></li>
            </ul>
            <p className="menu-label">
                Plataforma
            </p>
            <ul className="menu-list">
                <li>
                    <a>Usuarios</a>
                    <ul>
                        <li><a>Ver Usuarios</a></li>
                        <li><a>Ver Usuario Especifico</a></li>
                        <li><a>Crear Usuario</a></li>
                        <li><a>Eliminar Usuario</a></li>
                    </ul>
                </li>
                <li>
                    <a>Grupos</a>
                    <ul>
                        <li><a>Ver Grupos</a></li>
                        <li><a>Ver Grupo Especifico</a></li>
                        <li><a>Crear Grupo</a></li>
                        <li><a>Eliminar Grupo</a></li>
                        <li><a></a></li>
                    </ul>
                
                </li>
                <li>
                    <a>Permisos</a>
                    <ul>
                        <li><a>Gestionar Permisos</a></li>
                    </ul>
                </li>
                
            </ul>
        </aside>
    );
}

export default Menu;