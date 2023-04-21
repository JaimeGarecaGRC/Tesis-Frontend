import React from 'react';

function Pagination() {
    return (
        <nav className="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Anterior</a>
            <a className="pagination-next">Siguiente</a>
            <ul className="pagination-list">
                <li>
                    <a className="pagination-link is-info" aria-label="Goto page 1">1</a>
                </li>
                <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a className="pagination-link" aria-label="Goto page 45">4</a>
                </li>
                <li>
                    <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">5</a>
                </li>
                <li>
                    <a className="pagination-link" aria-label="Goto page 47">6</a>
                </li>
                <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a className="pagination-link" aria-label="Goto page 86">10</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;