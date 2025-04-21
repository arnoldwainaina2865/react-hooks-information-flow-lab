import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <Filter 
        onCategoryChange={handleCategoryChange} 
        selectedCategory={selectedCategory} 
      />
      <ul className="Items">
        {itemsToDisplay.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;