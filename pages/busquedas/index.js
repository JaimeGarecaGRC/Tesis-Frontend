import React from 'react';
import Searcher from '../../components/searcher/searcher';

const Busquedas = () => {
    return (
        <div className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-quarters">
                            <Searcher /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Busquedas;