import { useAtom } from "jotai";
import { cartAtom, totalAtom } from "./shopping-cart-atoms";

export const ShoppingCart = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== id));
  };
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart?.map((item, id) => {
          return (
            <li key={id}>
              {item.itemName} - {item.price}
              <button onClick={() => removeItem(id)}>Remove item</button>
            </li>
          );
        })}
      </ul>
      <h2>Total: {total}</h2>
      <button onClick={() => addItem({ itemName: "Apple", price: 0.99 })}>
        Add Apple
      </button>
      <button onClick={() => addItem({ itemName: "Banana", price: 2.99 })}>
        Add Banana
      </button>
    </div>
  );
};
