import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';    
import { getCurrentPath, changeMenu } from '/components/menu/menu-logic.js';

function Menu() {

    const currentUrl = getCurrentPath();
    const { documentoId, ticketId, revisionId, categoriaId, usuarioId } = useRouter().query;
    const  consulta  = encodeURIComponent(useRouter().query.consulta);

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
        <aside className="menu box-menu">

            {/* Seccion de Busqueda */}
            <p className="menu-label">
                Busqueda
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/busquedas' ? 'is-active' : ''} href="/busquedas">Buscar</Link></li>
                <li><Link className={currentUrl == '/busquedas/resultado?consulta=' + consulta ? 'is-active' : ''} href="/busquedas/resultado?consulta=busco%20un%20documento">Resultado...</Link></li>
            </ul>

            {/* Seccion de Documentos */}
            <p className="menu-label">
                Documentos
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/documentos' ? 'is-active' : ''} href="/documentos">Listar Documentos</Link></li>
                <li><Link className={currentUrl == '/documentos/'  + documentoId ? 'is-active' : ''} href="/documentos/1">Documento Abierto...</Link></li>
                <li>
                    <a className={menuOptions[0] ? 'is-info' : ''} onClick = { () => {changeMenu(0); setChanger(changer + 1)}}>Nuevo Documento</a>
                    <ul className={menuOptions[0] ? '' : 'is-hidden'}>
                        <li><Link className={currentUrl == '/documentos/subir/documento-externo' ? 'is-active' : ''} href="/documentos/subir/documento-externo">Subir Documento Externo</Link></li>
                        <li><Link className={currentUrl == '/documentos/subir/video' ? 'is-active' : ''} href="/documentos/subir/video">Subir Video</Link></li>
                        <li><Link className={currentUrl == '/documentos/subir/articulo' ? 'is-active' : ''} href="/documentos/subir/articulo">Crear Articulo</Link></li>
                    </ul>
                </li>
            </ul>

            {/* Seccion de Relaciones */}
            <p className="menu-label">
                Relaciones
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/relaciones' ? 'is-active' : ''} href="/relaciones">Ver Relaciones de un Documento</Link></li>
                <li><Link className={currentUrl == '/relaciones/crear' ? 'is-active' : ''} href="/relaciones/crear">Crear Nuevas Relaciones</Link></li>
            </ul>
            
            {/* Seccion de Categorias */}
            <p className="menu-label">
                Categorias
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/categorias' ? 'is-active' : ''} href="/categorias">Listar Categorias</Link></li>
                <li><Link className={currentUrl == '/categorias/' + categoriaId ? 'is-active' : ''} href="/categorias/1">Ver Categoria...</Link></li>
                <li>
                    <a className={menuOptions[1] ? 'is-info' : ''} onClick = { () => {changeMenu(1); setChanger(changer + 1)}}>Gestionar Categoria</a>
                    <ul className={menuOptions[1] ? '' : 'is-hidden'}>
                        <li><Link className={currentUrl == '/categorias/crear' ? 'is-active' : ''} href="/categorias/crear">Crear Categoria</Link></li>
                        <li><Link className={currentUrl == '/categorias/modificar' ? 'is-active' : ''} href="/categorias/modificar">Modificar Categoria</Link></li>
                        <li><Link className={currentUrl == '/categorias/eliminar' ? 'is-active' : ''} href="/categorias/eliminar">Eliminar Categoria</Link></li>
                    </ul>
                </li>
            </ul>

            {/* Seccion de Tareas */}
            <p className="menu-label">
                Tareas
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/dashboard' ? 'is-active' : ''} href="/dashboard">Dashboard</Link></li>
                <li><Link className={currentUrl == '/tareas' ? 'is-active' : ''} href="/tareas">Listar Tareas</Link></li>
                <li><Link className={currentUrl == '/tareas/tickets/' +  ticketId ? 'is-active' : ''} href="/tareas/tickets/1">Respondiendo Ticket...</Link></li>
                <li><Link className={currentUrl == '/tareas/revisiones/' + revisionId ? 'is-active' : ''} href="/tareas/revisiones/1">Respondiendo Revision...</Link></li>
            </ul>

            {/* Seccion de Mensajeria */}
            <p className="menu-label">
                Mensajeria
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/mensajes' ? 'is-active' : ''} href="/mensajes">Ver Chats</Link></li>
                <li><Link className={currentUrl == '/mensajes/archivados' ? 'is-active' : ''} href="/mensajes/archivados">Chats Archivados</Link></li>
            </ul>

            {/* Seccion de Usuarios */}
            <p className="menu-label">
                Usuarios
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/usuarios' ? 'is-active' : ''} href="/usuarios">Listar Usuarios</Link></li>
                <li><Link className={currentUrl == '/usuarios/perfiles/'+ usuarioId ? 'is-active' : ''} href="/usuarios/perfiles/1">Perfil Abierto...</Link></li>
                <li>
                    <a className={menuOptions[3] ? 'is-info' : ''} onClick = { () => { changeMenu(3); setChanger(changer + 1)} }>Gestionar Usuario</a>
                    <ul className={menuOptions[3] ? '' : 'is-hidden'}>
                        <li><Link className={currentUrl == '/usuarios/crear' ? 'is-active' : ''} href="/usuarios/crear">Crear Usuario</Link></li>
                        <li><Link className={currentUrl == '/usuarios/modificar' ?      'is-active' : ''} href="/usuarios/modificar">Modificar Usuario</Link></li>
                        <li><Link className={currentUrl == '/usuarios/eliminar' ? 'is-active' : ''} href="/usuarios/eliminar">Eliminar Usuario</Link></li>
                    </ul>
                </li>
            </ul>

            {/* Seccion de Organizacion */}
            <p className="menu-label">
                Organizacion
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/organizacion' ? 'is-active' : ''} href="/organizacion">Ver Estructura</Link></li>
                <li>
                    <a className={menuOptions[4] ? 'is-info' : ''} onClick = { () => {changeMenu(4); setChanger(changer + 1)}}>Gestionar Grupos</a>
                    <ul className={menuOptions[4] ? '' : 'is-hidden'}>
                        <li><Link className={currentUrl == '/organizacion/grupos/crear' ? 'is-active' : ''} href="/organizacion/grupos/crear">Crear Grupos</Link></li>
                        <li><Link className={currentUrl == '/organizacion/grupos/modificar' ? 'is-active' : ''} href="/organizacion/grupos/modificar">Modificar Grupos</Link></li>
                        <li><Link className={currentUrl == '/organizacion/grupos/eliminar' ? 'is-active' : ''} href="/organizacion/grupos/eliminar">Eliminar Grupos</Link></li>
                    </ul>
                </li>
                <li>
                    <a className={menuOptions[5] ? 'is-info' : ''} onClick = { () => {changeMenu(5); setChanger(changer + 1)}}>Gestionar Areas</a>
                    <ul className={menuOptions[5] ? '' : 'is-hidden'}>
                        <li><Link className={currentUrl == '/organizacion/areas/crear' ? 'is-active' : ''} href="/organizacion/areas/crear">Crear Areas</Link></li>
                        <li><Link className={currentUrl == '/organizacion/areas/modificar' ? 'is-active' : ''} href="/organizacion/areas/modificar">Modificar Areas</Link></li>
                        <li><Link className={currentUrl == '/organizacion/areas/eliminar' ? 'is-active' : ''} href="/organizacion/areas/eliminar">Eliminar Areas</Link></li>
                    </ul>
                </li>
            </ul>

            {/* Seccion de Configuracion */}
            <p className="menu-label">
                Plataforma
            </p>
            <ul className="menu-list">
                <li><Link className={currentUrl == '/roles' ? 'is-active' : ''} href="/roles">Listar Roles</Link></li>
                <li><Link className={currentUrl == '/roles/permisos' ? 'is-active' : ''} href="/roles/permisos">Ver Permisos en el Rol...</Link></li>
            </ul>


        </aside>
    );
}

export default Menu;