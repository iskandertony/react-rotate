import "./Table.css";
import { useState } from "react";

const products = [
  { name: "Lagman (Boso,Guro):", price: 180, discription: "meat, papper,muka" },
  { name: "Pelmeni:", price: 180, discription: "meat, spices, muka" },
  { name: "Soup:", price: 180, discription: "vegetables, spices,water" },
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
  const [activeItem, setActiveItem] = useState(null);

  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // const handleSub = () => {

  // };

  const handleActiveItem = (item) => {
    setActiveItem(item)
  }

  const handleActiveItemNull = () => {
    setActiveItem(null)
  }

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  console.log(activeItem);
  if (activeItem) {
    return (
      <div>
        <div><button onClick={handleActiveItemNull}>back</button></div>
        <div>{activeItem.name}</div>
        <div>{activeItem.discription}</div>
        <div>{activeItem.price}</div>
      </div>
    )
  }
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

      {true && (
        <div id="menu">
          {filtered.map((item) => (
            <div className="product">
              <div onClick={() => handleActiveItem(item)} className="product-sub">
                {item.name}
              </div>
              <div className="product-sub">{item.price}</div>
            </div>
          ))}
        </div>
      )}


    </div>
  );
};

export default Table;
