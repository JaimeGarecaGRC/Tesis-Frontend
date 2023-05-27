import React, { useState } from 'react';

function CreateContent() {

    function handleClickAddTitle() {
        const title = {tipo: "titulo", texto: "Este es un titulo"};
        setContent([...content, title]);
        console.log(content);
    }

    function handleClickAddContentText() {
        const contentText = {tipo: "contenidoTexto", texto: "Este es un contenido texto"};
        setContent([...content, contentText]);
        console.log(content);
    }

    function handleDeleteContent() {
        setContent([]);
        console.log(content);
    }

    const [content, setContent] = useState([]);

    return(
        <>
            {content.map( (item, index) => {
                if(item.tipo === "titulo")
                    return <input style={{marginBottom: 5, marginTop: 5}} className="input" type="text" placeholder={item.texto} key={index} />
                else if(item.tipo === "contenidoTexto")
                    return <textarea style={{marginBottom: 5, marginTop: 5}} className="textarea" placeholder={item.texto} key={index}></textarea>
            })}

            <p className="buttons">
                <button className="button" onClick={handleClickAddTitle}>
                    <span className="icon is-small">
                        <i className="fa-solid fa-heading"></i>
                    </span>
                </button>
                <button className="button" onClick={handleClickAddContentText}>
                    <span className="icon is-small">
                    <i className="fa-solid fa-text-height"></i>
                    </span>
                </button>
            </p>
            
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-danger" onClick={handleDeleteContent}>Borrar Todo</button>
                </div>
                <div className="control">
                    <button className="button is-link">Enviar</button>
                </div>
            </div>
        </>
        
    )
}

export default CreateContent;