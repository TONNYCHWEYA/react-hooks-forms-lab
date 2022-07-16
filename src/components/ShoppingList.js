import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  const [filterOrSearch, setFilterOrSearch] = useState(false)


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    
    setSearchInput(event.target.value)
    setFilterOrSearch(true)
  }

  const searchItemsToDisplay = items.filter((item) => {
    if (searchInput === "") return true;

    return item.name === searchInput;
  });

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} searchInput={searchInput}/>

      <ul className="Items">
        {filterOrSearch ? searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )):itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
