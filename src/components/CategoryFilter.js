import React from "react";

function CategoryFilter({categories, onSelectedCategory}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=> (
        <button key={category} onClick={onSelectedCategory}>{category}</button>
      ))}
    </div>
  );
 
}

export default CategoryFilter;
