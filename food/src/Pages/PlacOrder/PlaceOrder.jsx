import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCardAmount}=useContext(StoreContext)
  const handled=()=>{
    confirm("Your Order Delivery and Only cash On Delivery")
  }
  return (
    <div >
      <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-filelds">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='street' />
          <div className="multi-filelds">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='Last State' />
          </div>
          <div className="multi-filelds">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone' />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtoytal</p>
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
          <button onClick={handled}>Proceed To PaymentOut</button>
        </div>
        </div>
      </form>

    </div>
  )
}

export default PlaceOrder
