import React from 'react';
import styles from './subir-documentos.module.scss';
import FileUpload from '../../../components/file-upload/file-upload';

const SubirDocumentos = () => {
    return (
        <div class="columns is-centered">
            <div class="column is-four-fifths">

                <h1 class={`title is-1 has-text-centered ` + styles.marginTitleTop}>Subir Documentos</h1>
                <h4 class="subtitle is-4 has-text-centered">Sube el documento al sistema</h4>

                <div class="box">
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-two-thirds">
                            <h4 class="title is-4">1. Selecciona el archivo a subir</h4>

                            <div className={styles.marginUploadButton}>
                                <FileUpload />
                            </div>


                            <article class={`message is-link ` + styles.marginMessage}>
                                <div class="message-header">
                                    {/* <p>Subido con Exito</p> */}
                                    <p>Subir un Archivo</p>
                                </div>
                                <div class="message-body">
                                    {/* El archivo <strong>Nombre-Con-Archivo.txt</strong> se subio en exito. */}
                                    Sube un archivo de formato .PDF o .WORD
                                </div>
                            </article>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>


                <progress class={`progress is-link ` + styles.marginProgressBar} value="50" max="100">50%</progress>

                <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                    <button class="button is-link">Anterior</button>
                    <button class="pagination-next button is-link">Siguiente</button>
                </nav>
            </div>
        </div>
    );
}

export default SubirDocumentos;