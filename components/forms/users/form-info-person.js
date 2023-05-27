import React from 'react';

function FormInfoPersona() {
    return(
        <>
            <h5 class="title is-5">2. Ingresar Datos de las Personas</h5>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Nombre</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa el Nombre"/>
                    </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Apellido Paterno</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa Apellido Paterno" />
                    </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Apellido Materno</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa Apellido Materno" />
                    </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Telefono</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa el Telefono"/>
                    </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Cargo</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa el Cargo" />
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormInfoPersona;