import React from 'react';

function Pagination() {
    return (
        <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
            <a class="pagination-previous">Anterior</a>
            <a class="pagination-next">Siguiente</a>
            <ul class="pagination-list">
                <li>
                    <a class="pagination-link is-info" aria-label="Goto page 1">1</a>
                </li>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a class="pagination-link" aria-label="Goto page 45">4</a>
                </li>
                <li>
                    <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">5</a>
                </li>
                <li>
                    <a class="pagination-link" aria-label="Goto page 47">6</a>
                </li>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a class="pagination-link" aria-label="Goto page 86">10</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;