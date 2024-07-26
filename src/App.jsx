import { useState } from "react";
import "./App.css";
import Select from "./components/Select";
const options = ["One", "Two", "Three", "Four", "Five"];

const App = () => {
  const [search, setSearch] = useState("");
  const onSearchHandler = (item) => {
    return search.toLowerCase() == ""
      ? item
      : item.toLowerCase().includes(search);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className="kzui-App">
      <Select
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        Placeholder={"Search..."}
        isMulti={false}
        onChangeHandler={onChangeHandler}
        onMenuOpen={false}
        onSearchHandler={onSearchHandler}
      />
      <Select
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        Placeholder={"Search..."}
        isMulti={true}
        onChangeHandler={onChangeHandler}
        onMenuOpen={false}
        onSearchHandler={onSearchHandler}
      />
    </div>
  );
};

export default App;
