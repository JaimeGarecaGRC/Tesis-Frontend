import React from 'react';

function FileUpload() {
    return (
        <div className={`file is-large is-boxed has-name is-link is-centered `}>
            <label className="file-label">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                <span className="file-icon">
                    <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                    Subir Documento
                </span>
                </span>
                <span className="file-name has-text-centered">
                    ... . ...
                </span>
            </label>
        </div>
    );
}

export default FileUpload;