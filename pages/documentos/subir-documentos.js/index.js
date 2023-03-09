import React from 'react';
import styles from './subir-documentos.module.scss';

const SubirDocumentos = () => {
    return (
        <div class="columns is-centered">
            <div class="column is-four-fifths">
                <h1 class={`title is-1 has-text-centered ` + styles.marginTitleTop}>Subir Documentos</h1>
                <h4 class="subtitle is-4 has-text-centered">Sube el documento al sistema</h4>
                <div class={`file is-large is-boxed has-name is-primary is-centered ` + styles.marginUploadButton}>
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" />
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Subir Documento
                        </span>
                        </span>
                        <span class="file-name has-text-centered">
                            ... . ...
                        </span>
                    </label>
                </div>
                
                <progress class={`progress is-primary ` + styles.marginProgressBar} value="30" max="100">30%</progress>

                <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                    <button class="button is-primary">Anterior</button>
                    <button class="pagination-next button is-primary">Siguiente</button>
                </nav>
            </div>
        </div>
    );
}

export default SubirDocumentos;