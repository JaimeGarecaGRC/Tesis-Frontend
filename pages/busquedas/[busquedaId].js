import React from 'react';
import { useRouter } from 'next/router';

const BusquedaId = () => {
    //FORMA 1
    //const router = useRouter();

    //FORMA 2
    //const { query: { busquedaId } } = useRouter();

    //FORMA 3
    const { busquedaId }= useRouter().query;

    //Forma 4
    //const id = useRouter().query.busquedaId;

    

    return (
        <div>
            {/*FORMA 1*/}
            {/* <h1>Busqueda Id: {router.query.busquedaId}</h1> */}

            {/*FORMA 2 y 3 */}
            <h1>Busqueda Id: { busquedaId }</h1>

            {/* FORMA 4 */}
            {/* <h1>Busqueda Id: { id }</h1> */}
        </div>
    );
}

export default BusquedaId;