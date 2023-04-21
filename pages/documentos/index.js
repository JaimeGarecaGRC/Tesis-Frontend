import React from 'react';
import List from '../../components/list/List';

const Documentos = () => {
    return (
        <div>
            <div className="columns is-centered">
                <div className="column is-three-quarters">
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <List />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documentos;