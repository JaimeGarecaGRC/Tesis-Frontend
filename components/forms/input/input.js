import React from 'react';

function Input( data ) {
    return (
        <div className="field has-addons">
            <div className="control has-icons-left is-expanded">
                <input
                    className="input is-medium is-rounded"
                    type="text"
                    placeholder={data.placeholderText}
                />
                <span className="icon is-small is-left">
                    <i 
                        className={data.iconName}
                    />
                </span>
                <span className="icon is-left"></span>
            </div>
        </div>
    );
}

export default Input;