import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  //provide the ability for the user to change the selected category 
  function handleFilter(e) {
    //chance the state of selected category based on the event  
    setSelectedCategory(e.target.value)
  }
  //filter based on the selectedCategory 
  //
  const itemsFiltered = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    }
    return selectedCategory === item.category

  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={handleFilter}/>
      </div>
      <ul className="Items">
        {itemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
