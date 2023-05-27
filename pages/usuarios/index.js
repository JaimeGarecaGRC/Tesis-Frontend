import React from 'react';
import TableUsuarios from '../../components/table/table-usuarios';

const Usuarios = () => {
    return (
        <div className="columns is-centered">
            <div className="column is-three-quarters documento-slider" >

                <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <div className="field is-grouped">
                        <p className="control">
                            <button className="button is-link">
                                Crear Usuarios
                            </button>
                        </p>
                        <p className="control">
                            <button className="button is-link">
                                Editar Usuarios
                            </button>
                        </p>
                        <p className="control">
                            <button className="button is-link">
                                Eliminar Usuarios
                            </button>
                        </p>
                    </div>
                </div>
                <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    < TableUsuarios />
                </div>
            </div>
        </div>
    );
}

export default Usuarios;