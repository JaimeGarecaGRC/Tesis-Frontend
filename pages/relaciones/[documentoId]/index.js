import { useRouter } from 'next/router';
import React from 'react';

const RelacionesDocumento = () => {

    const { documentoId } = useRouter().query;

    return (
        <div>
            <h1>Ver las Relaciones de un Documento: idDocumento: { documentoId } Index</h1>
        </div>
    );
}

export default RelacionesDocumento;