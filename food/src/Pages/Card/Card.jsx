import React, { useContext } from 'react'
import "./Card.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Card = () => {
  const { cartItem, food_list, removeFromCart,getTotalCardAmount } = useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='card'>
      <div className='card-items'>
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />


        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className='card-items-title card-items-item'>
                  <img src={item.image} alt="" />
                  <p>${item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>

            )
          }

        })}
      </div>
      <div className="card-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCardAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCardAmount()===0?0:getTotalCardAmount()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To CheckOut</button>
        </div>
        <div className="card-promocode">
          <div>
            <p>If you have a promo code, Enter it heree.....</p>
            <div className='card-promo-input'>
                <input type="text" placeholder='promo code' />
                <button>submit</button>
        
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
