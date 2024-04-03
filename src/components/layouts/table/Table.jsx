import { observer } from "mobx-react-lite";

import dataStore from "../../../store/dataStore";

import "./Table.css";

const Table = () => {
  if (dataStore.productsSelection.length === 0) {
    return <div className="empty-result">Ничего не найдено</div>;
  }
  return (
    <div className="table">
      <table className="table__wrapper">
        <thead className="table__head">
          <tr className="table__stroke">
            <th className="table__cell-title">Идентификатор</th>
            <th className="table__cell-title">Наименование</th>
            <th className="table__cell-title">Вид товара</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {dataStore.productsSelection.map((item, index) => (
            <tr className="table__stroke" key={index}>
              <td className="table__cell">{item.id}</td>
              <td className="table__cell">{item.name}</td>
              <td className="table__cell">{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Table);
