import { useRouter } from 'next/router';
import React from 'react';

const RolIdPermisos = () => {

    const {rolId} = useRouter().query;

    return (
        <div>
            <h1>Documento Id id: { rolId }</h1>
        </div>
    );
}

export default RolIdPermisos;