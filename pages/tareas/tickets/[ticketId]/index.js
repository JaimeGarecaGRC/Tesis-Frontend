import { useRouter } from 'next/router';
import React from 'react';

const TicketId = () => {

    const {ticketId} = useRouter().query;

    return (
        <div>
            <h1>Categoria Id id: { ticketId }</h1>
        </div>
    );
}

export default TicketId; 