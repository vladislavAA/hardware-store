import { makeAutoObservable } from "mobx";

class DataStore {
  productsSelection = [];
  products = [
    { id: 1, name: "Дверь", type: "Дерево" },
    { id: 2, name: "Труба", type: "Железо" },
    { id: 3, name: "Паркет", type: "Дерево" },
    { id: 4, name: "Жалюзи", type: "Пластик" },
    { id: 5, name: "Раковина", type: "Железо" },
    { id: 6, name: "Стол", type: "Пластик" },
    { id: 7, name: "Ящик", type: "Дерево" },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  searchProducts(id, name, type) {
    if (id === 0) {
      this.productsSelection = [];
      return;
    }

    if (!id && !name && !type) {
      this.productsSelection = this.products;
      return;
    }

    this.productsSelection = this.products.filter((product) => {
      return (
        (!id || product.id === id) &&
        (!name || product.name.toLowerCase().includes(name.toLowerCase())) &&
        (!type || product.type.toLowerCase() === type.toLowerCase())
      );
    });
  }
}

export default new DataStore();
