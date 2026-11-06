import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart = () => {} }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <div className={styles.productMark} aria-hidden="true">
        {product.category === 'Fruits' ? '01' : '02'}
      </div>
      <div className={styles.productDetails}>
        <p className={styles.category}>{product.category}</p>
        <h3>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.stockStatus}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
      <button
        className={styles.addButton}
        data-testid={'product-' + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
