import React, { useEffect, useState } from 'react';
import ListContent from './list-contents/list-contents';
import { changeList } from './list-logic.js';

import datos from './datos.json';


function List() {

    changeList

    const [listOptions, setListOptions] = useState([]);
    const [changer, setChanger] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            {
                setListOptions(JSON.parse(localStorage.getItem("documentListData")));
            }
        }
    }, [changer]);

    return (
        <aside className="menu box-list" >
            <ul className="menu-list">
                {   
                    datos.map( (element) => (
                        <li key={element.id}><a onClick={() => {changeList("area", element.id); setChanger(changer + 1)}}>{ element.area }</a>
                        {element.grupos.length > 0 ?
                            <ul className={listOptions[element.id]?.area? '' : 'is-hidden'}>    
                                {element.grupos.map ((subElement) => (
                                    <li key={subElement.id}><a onClick={() => {changeList("grupo", element.id, subElement.id); setChanger(changer + 1)}} >{ subElement.grupo }</a>
                                    {subElement.documentos.length > 0 ?
                                        <ul className={listOptions[element.id]?.grupos[subElement.id]? '' : 'is-hidden'}>
                                            {subElement.documentos.map ((document) => (
                                                <li key={document.id}>
                                                    <ListContent 
                                                        iconName={document.iconName}
                                                        abb={document.abb}
                                                        title={document.title}
                                                        username={document.username}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    : <></>}
                                    </li>
                                ))}
                            </ul>
                            : <></>}
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};

export default List;
