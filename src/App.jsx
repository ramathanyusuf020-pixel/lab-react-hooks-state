import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((items) => [...items, product])
  }

  return (
    <div className={`app-shell${isDarkMode ? ' dark-mode' : ''}`}>
      <header className="app-header">
        <div>
          <p className="eyebrow">FRESH PICKS, EVERY DAY</p>
          <h1>Market Basket</h1>
        </div>
        <DarkModeToggle
          isDarkMode={isDarkMode}
          onToggle={() => setIsDarkMode((darkMode) => !darkMode)}
        />
      </header>

      <main className="shopping-layout">
        <section className="products-section" aria-labelledby="products-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE MARKET</p>
              <h2 id="products-heading">Available Products</h2>
            </div>
            <label className="filter-control">
              <span>Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option value="all">All categories</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
              </select>
            </label>
          </div>
          <ProductList
            selectedCategory={selectedCategory}
            onAddToCart={addToCart}
          />
        </section>

        <Cart items={cartItems} />
      </main>
    </div>
  )
}

export default App
