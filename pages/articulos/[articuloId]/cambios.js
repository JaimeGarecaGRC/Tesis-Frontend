import { useRouter } from 'next/router';
import React from 'react';

const cambios = () => {

    const { articuloId } = useRouter().query;
    return (
        <div>
            <h1>Cambios en el ID: { articuloId } </h1>
        </div>
    );
}

export default cambios;