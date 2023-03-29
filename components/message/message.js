
const Message = () => {
    return (
        <article class={`message is-link `}>
            <div class="message-header">
                {/* <p>Subido con Exito</p> */}
                <p>Subir un Archivo</p>
            </div>
            <div class="message-body">
                {/* El archivo <strong>Nombre-Con-Archivo.txt</strong> se subio en exito. */}
                Sube un archivo de formato .PDF o .WORD
            </div>
        </article>
    );
}

export default Message;