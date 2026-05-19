import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./redux/cartActions";

const App = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: 1,
      name: 'Laptop',
      price: 1500,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <button onClick={handleAddItem}>Adicionar Laptop</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;