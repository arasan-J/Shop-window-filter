import "./App.css";
import { useState } from "react";
import ImageList from "./components/imageList";
import CheckboxFilter from "./components/checkboxFilter";

function App() {
  // set to store filter option
  const [filterList, setFilterList] = useState(new Set());

  //method to add or remove filter options into filterlist set
  const handleFilter = (e) => {
    console.log(e);
    const tempFilter = new Set(filterList);

    if (tempFilter.has(e.target.name)) {
      tempFilter.delete(e.target.name);
    } else {
      tempFilter.add(e.target.name);
    }
    setFilterList(tempFilter);// ['front']
  };

  return (
    <div>
      <div className="header">
        <div>Window Gallery</div>
      </div>
      <div className="mainContainer">
        <CheckboxFilter handleFilter={handleFilter} />
        <ImageList filterList={filterList} />
      </div>
    </div>
  );
}

export default App;
