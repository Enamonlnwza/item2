import React from 'react';

const ItemList = ({ items, onRemove }) => {
    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => onRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;