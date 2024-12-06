import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Results from "./components/Results";
import Filters from "./components/Filters";

const dummyData = [
  { id: 1, title: "React Basics", category: "React" },
  { id: 2, title: "Advanced JavaScript", category: "JavaScript" },
  { id: 3, title: "Responsive Design", category: "CSS" },
  { id: 4, title: "Understanding Redux", category: "React" },
  { id: 5, title: "CSS Grid Tutorial", category: "CSS" },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = dummyData.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 ">Search Blog</h1>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Results data={filteredData} />
    </div>
  );
}

export default App;
