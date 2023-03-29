import { useRouter } from 'next/router';
import React from 'react';

const DocumentoId = () => {

    const {documentoId} = useRouter().query;

    return (
        <div>
            <h1>Documento Id id: { documentoId }</h1>
        </div>
    );
}

export default DocumentoId;