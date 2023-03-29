import { useRouter } from 'next/router';
import React from 'react';

const RevisionId = () => {

    const {revisionId} = useRouter().query;

    return (
        <div>
            <h1>Categoria Id id: { revisionId }</h1>
        </div>
    );
}

export default RevisionId; 