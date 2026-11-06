import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <aside className="cart-panel" aria-labelledby="cart-heading">
      <div className="cart-heading">
        <h2 id="cart-heading">Shopping Cart</h2>
        <span className="cart-count" aria-label={`${items.length} items`}>
          {items.length}
        </span>
      </div>
      {items.length === 0 ? (
        <p className="cart-empty">Your basket is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Cart
