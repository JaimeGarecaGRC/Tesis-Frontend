import React, { useState } from 'react';
import UploadDocument from '../../../../components/upload-components/document/upload-document';
import CreateArticle from '../../../../components/create-article/create-article';

const SubirDocumentoExterno = () => {

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div>
            <div className="columns is-centered">
                <div className="column is-three-quarters documento-slider" >
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <CreateArticle onFormSubmit={handleFormSubmit}/>
                    </div>
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <UploadDocument formData={formData} onFormSubmit={handleFormSubmit}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default SubirDocumentoExterno;