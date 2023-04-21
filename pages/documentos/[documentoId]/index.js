import { useRouter } from 'next/router';
import React from 'react';
import DocumentGeneralInfo from '../../../components/document-components/documents-general-info/DocumentGeneralInfo';
import DocumentContent from '../../../components/document-components/documents-content/DocumentContent';
import DocumentComments from '../../../components/document-components/documents-comments/documents-comments';
import DocumentRelations from '../../../components/document-components/documents-relations/documents-relations';

const DocumentoId = () => {

    const {documentoId} = useRouter().query;

    return (
        <div>
            <div className="columns is-centered">
                <div className="column is-three-quarters documento-slider" >
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <DocumentGeneralInfo 
                            documentoId={ documentoId }
                        />
                    </div>
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <DocumentContent />
                    </div>
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <DocumentComments />
                    </div>
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <DocumentRelations />
                    </div>
                        
                </div>
            </div>
        </div>
    );
}

export default DocumentoId;