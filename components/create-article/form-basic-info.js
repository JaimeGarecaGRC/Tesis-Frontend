import React, { useEffect } from 'react';

function FormBasicInfo({ titulo, setTitulo, creador, setCreador, categorias, setCategorias, descripcion, setDescripcion, handleData}) {

    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
        
    };

    const handleCreadorChange = (event) => {
        setCreador(event.target.value);
        handleData();
    };  

    const handleCategoriasChange = (event) => {
        setCategorias(event.target.value);
        handleData();
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
        handleData();
    };


    useEffect(() => {
        handleData();
    }, [titulo, creador,categorias,descripcion]);

    return(
        <>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Titulo</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Ingresa el Titulo" value={titulo} onChange={handleTituloChange}/>
                    </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Creador</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Este es el creador" />
                    </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Categorias</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input className="input" type="text" placeholder="Selecciona las categorias" />
                    </p>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Descripcion</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <textarea className="textarea" placeholder="Ingresa una descripcion" value={descripcion} onChange={handleDescripcionChange}></textarea >
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormBasicInfo;