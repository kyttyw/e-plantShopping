import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, removeItem, updateQuantity, } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
const cart = useSelector(state => state.cart.items);
const dispatch = useDispatch();

const getPrice = (cost) => {
return typeof cost === "string"
? parseFloat(cost.replace("$", ""))
: cost;
};

const calculateTotalAmount = (items) => {
return items.reduce((total, item) => {
const price = getPrice(item.cost);
return total + price * item.quantity;
}, 0);
};

const handleContinueShopping = (e) => {
e.preventDefault();
if (onContinueShopping) {
onContinueShopping();
}
};

const handleIncrement = (item) => {
dispatch(updateQuantity({ name: item.name }));
};

const handleDecrement = (item) => {
dispatch(disQuantity({ name: item.name }));
};

const handleRemove = (item) => {
dispatch(removeItem({ name: item.name }));
};

// Сумма для одного товара
const calculateItemTotal = (item) => {
const price = getPrice(item.cost);
return price * item.quantity;
};

return ( <div className="cart-container">
<h2 style={{ color: 'black' }}>
Total Cart Amount: ${calculateTotalAmount(cart).toFixed(2)} </h2>


  <div>
    {cart.map(item => (
      <div className="cart-item" key={item.name}>
        <img
          className="cart-item-image"
          src={item.image}
          alt={item.name}
        />

        <div className="cart-item-details">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-cost">{item.cost}</div>

          <div className="cart-item-quantity">
            <button
              className="cart-item-button cart-item-button-dec"
              onClick={() => handleDecrement(item)}
            >
              -
            </button>

            <span className="cart-item-quantity-value">
              {item.quantity}
            </span>

            <button
              className="cart-item-button cart-item-button-inc"
              onClick={() => handleIncrement(item)}
            >
              +
            </button>
          </div>

          <div className="cart-item-total">
            Total: ${calculateItemTotal(item).toFixed(2)}
          </div>

          <button
            className="cart-item-delete"
            onClick={() => handleRemove(item)}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="continue_shopping_btn">
    <button
      className="get-started-button"
      onClick={handleContinueShopping}
    >
      Continue Shopping
    </button>

    <br />

    <button className="get-started-button1">
      Checkout
    </button>
  </div>
</div>


);
};

export default CartItem;
