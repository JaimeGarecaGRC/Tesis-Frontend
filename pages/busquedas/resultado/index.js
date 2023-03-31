
import { useRouter } from 'next/router';
import React from 'react';
import Input from '../../../components/forms/input/input';
import Select from '../../../components/forms/select/select';
import Results from '../../../components/results/Results';
import Pagination from '../../../components/pagination/Pagination';

const BusquedaConsulta = () => {

    const consulta = useRouter().query.consulta;

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className='columns'>
                        <div className='column'>
                            <Input 
                                placeholderText= { consulta }
                                iconName= "fa-solid fa-bars"
                            />
                        </div> 
                        <div className='column is-one-fifth'>
                            <Select /> 
                        </div>
                    </div>
                </div>
            </section>
            <div className='columns is-centered'>
                <div className='column is-four-fifths'>
                    <Results />
                    <Results />
                    <Results />
                    <Results />
                    <Pagination />
                </div> 
            </div>
            

        </div>
    );
}

export default BusquedaConsulta;