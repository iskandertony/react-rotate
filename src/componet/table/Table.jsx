import "./Table.css";
import { useState } from "react";

const products = [
  { name: "Lagman (Boso,Guro):", price: 180, discription: "meat, spices,muka" },
  { name: "Pelmeni:", price: 180, discription: "meat, spices,muka" },
  { name: "Soup:", price: 180, discription: "meat, spices,muka" },
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
  const [sub, setSub] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSub = () => {
    setSub(!sub);
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

      {show && (
        <div id="menu">
          {filtered.map((item) => (
            <div className="product">
              <div onClick={handleSub} className="product-sub">
                {item.name}
              </div>
              {sub && <div className="product-sub">{item.discription}</div>}
              <div className="product-sub">{item.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
