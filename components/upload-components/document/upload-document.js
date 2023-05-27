import React, { useRef, useState } from 'react';

import { supabase } from './../../../lib/supabaseClient';

function UploadDocument({ formData, onFormSubmit }) {

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleEnviarClick = async (formDataEnviar) => {

        if (formDataEnviar) {
            try {
                const { data: basicInfoData, error: basicInfoError } = await supabase
                    .from('documentos')
                    .insert([
                    { titulo: formDataEnviar.titulo, descripcion: formDataEnviar.descripcion, tipo: "documento-externo" }
                    ])
                    .select();
            
                if (basicInfoError) {
                    console.error('Error al enviar el formulario a Supabase:', basicInfoError);
                } else {
                    console.log('Formulario enviado correctamente:', basicInfoData);
                    // Realiza las acciones adicionales después de enviar el formulario
                    if (selectedFile) {
                        const documentoFile = fileInputRef.current.files[0];
                        const { data: fileData, error: fileError } = await supabase.storage
                            .from('archivos_doc_externos')
                            .upload(`public/${documentoFile.name}`, documentoFile, {
                            cacheControl: '3600',
                            upsert: false
                            });
            
                        if (fileError) {
                            console.error('Error al cargar el archivo:', fileError);
                        } else {
                            console.log('Archivo cargado correctamente:', fileData);

                            console.log(documentoFile);

                            const { data: docExternoData, error: docExternoError } = await supabase
                            .from('documentos_externos')
                            .insert([
                            { id_documento: basicInfoData[0].id, nombre: documentoFile.name.substring(0, documentoFile.name.lastIndexOf(".")), extension: documentoFile.name.substring(documentoFile.name.lastIndexOf(".") + 1 ), tamano: documentoFile.size, url: fileData.path },
                            ])
                            if (docExternoError) {
                                console.error('Error al insertar en la tabla "documentos_externos":', docExternoError);
                            } else {
                                console.log('Registro insertado en la tabla "documentos_externos":', docExternoData);
                                // Realiza acciones adicionales después de insertar en "documentos_externos"
                                
                            }
                        }
                    }
                }
            } catch (error) {
            console.error('Error al enviar el formulario a Supabase:', error);
            }
        } else {
            console.log('No hay datos de formulario para enviar.');
        }
    };

    const handleCancel = () => {
        const file = fileInputRef.current.files[0];
        if (file) {
            setSelectedFile(file);
            console.log('Información del archivo:', file);
        } else {
            console.log('No se seleccionó ningún archivo.');
        }
    };

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        setSelectedFile(file);
    };

    return(
        <>
            <div className="columns is-mobile is-centered">
                <div className="column is-three-quarters" style={{marginTop: 20, marginBottom: 20}}>
                    <div>
                        <h4 className   ="title is-4"> 2. Sube un Documento </h4>
                    </div>
                </div>
            </div>
            
            <div className="columns is-mobile is-centered">
                <div className="column is-one-third">
                    <div>
                        <div className="file is-link is-large has-name is-boxed">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" ref={fileInputRef} onChange={handleFileChange}/>
                                <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Subir Documento
                                </span>
                            </span>
                                {selectedFile === null ? <></> : 
                                    <span className="file-name">
                                        { selectedFile.name }
                                    </span>
                                }
                                
                            </label>
                        </div>
                    </div>

                    <div className="buttons  is-grouped is-centered" style={{marginTop: 20}}>
                        <button className="button is-danger" onClick={() => handleCancel()}>
                            Cancelar
                        </button>
                        <button className="button is-link" onClick={() => handleEnviarClick(formData)}>
                            Enviar
                        </button>                           
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadDocument;