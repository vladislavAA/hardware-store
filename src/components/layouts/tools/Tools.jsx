import { useState } from "react";
import { observer } from "mobx-react-lite";

import dataStore from "../../../store/dataStore";

import "./Tools.css";

const Tools = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    dataStore.searchProducts(parseInt(id, 10), name, type);
  };
  return (
    <form className="tools" onSubmit={handleSubmit}>
      <input
        type="number"
        className="tools__id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Введите ID"
      />
      <input
        type="text"
        className="tools__name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите наименование"
      />
      <select
        name="type"
        className="tools__type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="" defaultValue>
          Выберите тип
        </option>
        <option value="Железо">Железо</option>
        <option value="Пластик">Пластик</option>
        <option value="Дерево">Дерево</option>
      </select>
      <button type="submit" className="tools__btn">
        Найти
      </button>
    </form>
  );
};

export default observer(Tools);
