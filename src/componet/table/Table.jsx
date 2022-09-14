import "./Table.css";
import { useState } from "react";

const products = [
  { name: "Lagman (Boso,Guro):", price: 180 },
  { name: "Pelmeni:", price: 180 },
  { name: "Soup:", price: 180 },
  { name: "Manty:", price: 200 },
  { name: "Plov:", price: 220 },
  { name: "Kotleta:", price: 180 },
  { name: "Gulash:", price: 220 },
  { name: "Ashlan-fu:", price: 100 },
  { name: "Ganfan:", price: 180 },
  { name: "Chicken:", price: 220 },
];

const Table = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(show);
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search)
  );

  return (
    <div>
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
      <div>
        <input
          type="text"
          onChange={handleSearch}
          id="input"
          value={search}
          placeholder="Search for .."
        />
      </div>

      <div id="menu">
        {filtered.map((item) => (
          <div className="product">
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
