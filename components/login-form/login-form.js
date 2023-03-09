import { useRouter } from 'next/router';
import React from 'react';

const LoginForm = () => {

    const  router = useRouter();

    return ( 
        <>
        {/* Columns Bulma */}
        <div className='horizontal-alignment'>
            <div className="columns content is-mobile is-centered is-vcentered">
                <div className="column is-half">
                    {/* Formulario */}
                    <div className="box">
                        <div className="field">
                        <label className="label">Nombre de Usuario</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="User123" />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Contraseña</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="********"/>
                            </div>
                        </div> 

                        <button class="button is-link" onClick={() => router.push('/articulos')}>Ingresar</button>

                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default LoginForm;