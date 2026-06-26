import axios from 'axios';
import { useState } from 'react'
import { formatMoney } from "../../utils/money";

export function CartItemDetails({ cartItem, loadCart }) {
   const [isupdatingQuantity, setIsUpdatingQuantity] = useState(false);
   const [ quantity, setQuantity ] = useState(cartItem.quantity)

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart()
  }

  const updateQuantity = async () => {
    if(isupdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity)
      })
      await loadCart()
      
      setIsUpdatingQuantity(false)
    } else {
      setIsUpdatingQuantity(true)
    }

  }


  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{ isupdatingQuantity ? 
             <input type='text' className='input-quantity' value={quantity} 
              onChange={(event) => {
                setQuantity(event.target.value)
              }}
              onKeyDown={(event) => {
               if(event.key === 'Enter') {
                updateQuantity()
               } else if(event.key === 'Escape') {
                setQuantity(cartItem.quantity);
                isupdatingQuantity(false)
               }
              }}/> :

             <span className="quantity-label">{cartItem.quantity}</span>
            }
           
          </span>
          <span className="update-quantity-link link-primary"
           onClick={updateQuantity}>
            Update
            </span>
          <span className="delete-quantity-link link-primary"
           onClick={deleteCartItem}>
            Delete
            </span>
        </div>
      </div>
    </>
  );
}
