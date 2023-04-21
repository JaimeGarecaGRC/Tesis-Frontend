
function Message() {
    return (
        <article className={`message is-link `}>
            <div className="message-header">
                {/* <p>Subido con Exito</p> */}
                <p>Subir un Archivo</p>
            </div>
            <div className="message-body">
                {/* El archivo <strong>Nombre-Con-Archivo.txt</strong> se subio en exito. */}
                Sube un archivo de formato .PDF o .WORD
            </div>
        </article>
    );
}

export default Message;