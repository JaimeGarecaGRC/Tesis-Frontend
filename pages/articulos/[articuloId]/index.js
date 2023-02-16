import { useRouter } from 'next/router';
import React from 'react';

const ArticulosId = () => {

    const {articuloId} = useRouter().query;

    return (
        <div>
            <h1>ArticulosId id: { articuloId }</h1>
        </div>
    );
}

export default ArticulosId;