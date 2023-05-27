import React from 'react';

function FormInfoUsuario() {
    return(
        <>
            <h5 class="title is-5">1. Ingresar Datos de los Usuarios</h5>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Correo</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa el Correo Electronico"/>
                    </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Contraseña</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Este la Contraseña" />
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormInfoUsuario;