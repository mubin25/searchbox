import React from "react";

function Filters({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "React", "JavaScript", "CSS"];

  return (
    <div className="mb-3">
      <label htmlFor="category" className="form-label">
        Filter by Category:
      </label>
      <select
        id="category"
        className="form-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
