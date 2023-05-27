import React, { useState } from 'react';
import FormBasicInfo from './form-basic-info';

function CreateArticle({ onFormSubmit }) {

    const [titulo, setTitulo] = useState('');
    const [creador, setCreador] = useState('');
    const [categorias, setCategorias] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleEnviarClick = () => {
        const formData = {
            titulo,
            creador,
            categorias,
            descripcion
        };
        onFormSubmit(formData);
    };

    return(
        <>
            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters" style={{marginTop: 20, marginBottom: 20}}>
                    <div>
                        <h4 className="title is-4"> 1. Ingresa Datos Principales </h4>
                    </div>
                </div>
            </div>

            <FormBasicInfo
                titulo={titulo}
                setTitulo={setTitulo}
                creador={creador}
                setCreador={setCreador}
                categorias={categorias}
                setCategorias={setCategorias}
                descripcion={descripcion}
                setDescripcion={setDescripcion}
                handleData={handleEnviarClick}
            />
        </>
    )
}

export default CreateArticle;