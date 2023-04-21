import React from 'react';

function ListContent( children )  {
    return (
        <a>
            <span className="icon-text">
                <span className="icon">
                    <i className={children.iconName}></i>
                </span>
                <span>{children.abb} <strong>{children.title}</strong> <small>BY {children.username}</small></span>
            </span>
        </a>
    )
}

export default ListContent;