import React, { useState } from 'react';
import CreateArticle from '../../../../components/create-article/create-article.js';
import CreateContent from '../../../../components/create-article/create-content.js';

const CrearArticulo = () => {

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div>
            <div className="columns is-centered">
                <div className="column is-three-quarters documento-slider" >
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        < CreateArticle onFormSubmit={handleFormSubmit}/>
                    </div>

                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        < CreateContent formData={formData} onFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
                
            </div>
        </div>


    );
}

export default CrearArticulo;