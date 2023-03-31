import React from 'react';

function FileUpload() {
    return (
        <div class={`file is-large is-boxed has-name is-link is-centered `}>
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
    );
}

export default FileUpload;