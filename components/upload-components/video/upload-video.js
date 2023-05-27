import React from 'react';

function UploadVideo() {
    return(
        <>
            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters" style={{marginTop: 20, marginBottom: 20}}>
                    <div>
                        <h4 class="title is-4"> 1. Sube un Video </h4>
                    </div>
                </div>
            </div>
            
            <div className="columns is-mobile is-centered">
                <div className="column is-one-third">
                    <div>
                        <div className="file is-link is-large has-name is-boxed">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Subir Video
                                </span>
                                </span>
                                <span className="file-name">
                                    video_nombre_bonito.mp4
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="buttons  is-grouped is-centered" style={{marginTop: 20}}>
                        <button className="button is-danger">
                            Cancelar
                        </button>
                        <button className="button is-link">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
            </>
    )
}

export default UploadVideo;