import React from 'react';

import datos from './datos.json';



function DocumentGeneralInfo( children ) {
    return (
        <>
            <div className='columns' style={{marginBottom: "0"}}>
                <div className='column is-2'>
                    <figure className="image is-128x128" style={{margin: "5%"}}>
                        <i className="fa-8x fa-regular fa-file-lines" style={{marginLeft: "13%"}}></i>
                    </figure>
                    <div className="field" style={{marginTop: "19%"}}>
                        <label className="label">Ultima Actualizacion</label>
                        <div className="control">
                            <input className="input" type="text" value={datos.ultimaAct} readOnly />
                        </div>gi
                    </div>
                </div>
                <div className='column'>
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input" type="text" value={datos.titulo} readOnly />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Creador</label>
                        <div className="control">
                            <input className="input" type="text" value={datos.creador} readOnly />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Categorias</label>
                        <div className="control">
                            <input className="input" type="text" value={datos.categoria[0]} readOnly />
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Descripcion</label>
                <div className="control">
                    <textarea className="textarea" value={datos.descripcion} readOnly ></textarea>
                </div>
            </div>
        </>

    )
}

export default DocumentGeneralInfo;