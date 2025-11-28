import React, { useState } from 'react';
import ItemList from './components/ItemList';
import './styles/main.css';

function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (itemToRemove) => {
        setItems(items.filter(item => item !== itemToRemove));
    };

    return (
        <div className="App">
            <h1>Item Tracker</h1>
            <ItemList items={items} onRemoveItem={removeItem} />
            {/* Add functionality to add items here */}
        </div>
    );
}

export default App;