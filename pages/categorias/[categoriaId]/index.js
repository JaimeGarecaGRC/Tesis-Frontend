import { useRouter } from 'next/router';
import React from 'react';

const CategoriaId = () => {

    const {categoriaId} = useRouter().query;

    return (
        <div>
            <h1>Categoria Id id: { categoriaId }</h1>
        </div>
    );
}

export default CategoriaId; 