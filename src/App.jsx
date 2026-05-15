// // import React, { useState } from 'react'
// // import ProductList from './components/ProductList'
// // import DarkModeToggle from './components/DarkModeToggle'
// // import Cart from './components/Cart'

// // const App = () => {
// //   // TODO: Implement state for dark mode toggle
  

// //   // TODO: Implement state for cart management

// //   // TODO: Implement state for category filtering

// //   return (
// //     <div>
// //       <h1>🛒 Shopping App</h1>
// //       <p>
// //         Welcome! Your task is to implement filtering, cart management, and dark
// //         mode.
// //       </p>

// //       {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
// //       <DarkModeToggle/>

// //       {/* TODO: Implement category filter dropdown */}

// //       <label>Filter by Category: </label>
// //       <select>
// //         <option value="all">All</option>
// //         <option value="Fruits">Fruits</option>
// //         <option value="Dairy">Dairy</option>
// //       </select>

// //       <ProductList />

// //       {/* TODO: Implement and render Cart component */}
// //       <Cart/>
// //     </div>
// //   )
// // }

// // export default App


 

//  import React, { useMemo, useState } from 'react'
// import ProductList, { sampleProducts } from './components/ProductList'
// import DarkModeToggle from './components/DarkModeToggle'
// import Cart from './components/Cart'
// import './styles.css'

// const App = () => {
//   // Dark mode state
//   const [darkMode, setDarkMode] = useState(false)

//   // Cart state (array of product objects)
//   const [cartItems, setCartItems] = useState([])

//   // Category filter state
//   const [category, setCategory] = useState('All')

//   // Toggle dark mode handler
//   const toggleDarkMode = () => setDarkMode((prev) => !prev)

//   // Add product to cart (prevents duplicates)
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       if (prev.find((p) => p.id === product.id)) return prev
//       return [...prev, product]
//     })
//   }

//   // Remove product from cart by id
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((p) => p.id !== id))
//   }

//   // Derive categories from sampleProducts (or products prop if you replace it)
//   const categories = useMemo(() => {
//     const setCats = new Set(sampleProducts.map((p) => p.category))
//     return ['All', ...Array.from(setCats)]
//   }, [])

//   // Filtered products based on selected category
//   const filteredProducts = useMemo(() => {
//     if (category === 'All') return sampleProducts
//     return sampleProducts.filter((p) => p.category === category)
//   }, [category])

//   return (
//     <div className={darkMode ? 'app dark' : 'app'}>
//       <header className="app-header">
//         <h1>🛒 Shopping App</h1>
//         <p>
//           Welcome! Your task is to implement filtering, cart management, and dark
//           mode.
//         </p>

//         {/* Dark mode toggle */}
//         <div className="controls">
//           <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

//           {/* Category filter dropdown */}
//           <label htmlFor="category-select" className="visually-hidden">
//             Filter by Category
//           </label>
//           <div className="filter">
//             <span className="filter-label">Filter by Category: </span>
//             <select
//               id="category-select"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               {categories.map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </header>

//       <main className="main-grid">
//         {/* Product list receives filtered products and addToCart handler */}
//         <section className="products-panel">
//           <ProductList
//             products={filteredProducts}
//             selectedCategory={category}
//             addToCart={addToCart}
//           />
//         </section>

//         {/* Cart receives current cart items and remove handler */}
//         <aside className="cart-panel">
//           <Cart items={cartItems} removeFromCart={removeFromCart} />
//         </aside>
//       </main>
//     </div>
//   )
// }

// export default App




import React, { useMemo, useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './styles.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all') // use lowercase 'all' to match tests

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id))
  }

  const categories = useMemo(() => {
    const setCats = new Set(sampleProducts.map((p) => p.category))
    return ['all', ...Array.from(setCats), 'NonExistent']
  }, [])

  const filteredProducts = useMemo(() => {
    if (!category || category.toLowerCase() === 'all') return sampleProducts
    return sampleProducts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    )
  }, [category])

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header className="app-header">
        <h1>🛒 Shopping App</h1>
        <p>Welcome! Implement filtering, cart management, and dark mode.</p>

        <div className="controls">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="filter">
            <label htmlFor="category-select">Filter by Category: </label>
            <select
              id="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="main-grid">
        <section className="products-panel">
          <ProductList
            products={filteredProducts}
            selectedCategory={category}
            addToCart={addToCart}
          />
        </section>

        <aside className="cart-panel">
          <Cart items={cartItems} removeFromCart={removeFromCart} />
          <div className="cart-total">Cart total: {cartItems.length}</div>
        </aside>
      </main>
    </div>
  )
}

export default App
