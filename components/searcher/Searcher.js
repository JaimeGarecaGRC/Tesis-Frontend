import React from 'react';

function Searcher() {
  return (
    <>
    <div className="columns is-centered">
      <div className="column is-half">
        <img src="https://cookie-cdn.cookiepro.com/logos/a75b7931-d048-433d-952a-58f1a48a7439/3f89d767-ecde-4b64-9683-f67ef5b18526/76d89e59-4124-4f2e-b7db-8f582fdbe3d0/IQVIA-Logo---White.png" alt="Logo" width="500" height="500" />
      </div>
    </div>
    <div className="field has-addons">
      <div className="control has-icons-left is-expanded">
        <input
          className="input is-medium is-rounded"
          type="text"
          placeholder="Buscar Documentos, Etiquetas, ..."
        />
        <span className="icon is-small is-left">
            <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="icon is-left"></span>
      </div>
    </div>
    <div className="columns is-variable is-8">
      <div className="column">
        <button className="button is-normal is-fullwidth">Realizar Busqueda</button>
      </div>
      <div className="column">
        <button className="button is-normal is-fullwidth">Primer Resultado</button>
      </div>
    </div>
  </>
  );
};

export default Searcher;
