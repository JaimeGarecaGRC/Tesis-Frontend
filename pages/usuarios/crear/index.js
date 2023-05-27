import React from 'react';
import FormInfoUsuario from '../../../components/forms/users/form-info-user';
import FormInfoPersona from '../../../components/forms/users/form-info-person';
import OptionCreateUsuario from '../../../components/options/users/create-user-options';

const UsuariosCrear = () => {

    

    return (
        <div className="columns is-centered">
        <div className="column is-three-quarters documento-slider" >
            <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                <h3 class="title is-3">Crear Usuario</h3>
            </div>
            <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                < FormInfoUsuario />
            </div>
            <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                < FormInfoPersona />
            </div>
            <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                < OptionCreateUsuario />
            </div>
        </div>
    </div>
    );
}

export default UsuariosCrear;