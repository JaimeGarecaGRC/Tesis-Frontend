import React from 'react';
import styles from './subir-documentos.module.scss';
import FileUpload from '../../../components/file-upload/file-upload';
import Message from '../../../components/message/message';
import ProgressBar from '../../../components/progress-bar/progress-bar';
import PaginationButtons from '../../../components/pagination-buttons/pagination-buttons';

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
                            <div className={styles.marginMessage}>
                                <Message />
                            </div>
                        </div>
                        <div class="column"></div>
                    </div>
                </div>

                <div className= { styles.marginProgressBar }>
                    <ProgressBar />
                </div>

                <div>
                    <PaginationButtons />
                </div>


            </div>
        </div>
    );
}

export default SubirDocumentos;