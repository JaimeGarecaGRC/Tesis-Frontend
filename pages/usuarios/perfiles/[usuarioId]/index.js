import { useRouter } from 'next/router';
import React from 'react';

const PerfilesUsuarioId = () => {

    const {usuarioId} = useRouter().query;

    return (
        <div>
            <h1>Documento Id id: { usuarioId }</h1>
        </div>
    );
}

export default PerfilesUsuarioId;