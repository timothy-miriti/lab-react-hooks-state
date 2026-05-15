// // import React from 'react'
// // import ProductCard from './ProductCard'

// // // Sample product data (for display purposes only)
// // export const sampleProducts = [
// //   { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
// //   { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
// // ]

// // const ProductList = () => {
// //   return (
// //     <div>
// //       <h2>Available Products</h2>

// //       {/* TODO: Filter sample data using selected category */}
// //       {sampleProducts.map((product) => (
// //         <ProductCard key={product.id} product={product} />
// //       ))}
// //     </div>
// //   )
// // }

// // export default ProductList



// import React from "react";
// import PropTypes from "prop-types";
// import ProductCard from "./ProductCard";

// // Sample product data (for display purposes only)
// export const sampleProducts = [
//   { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
//   { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false }
// ];

// const ProductList = ({ products, selectedCategory, addToCart }) => {
//   // If no products prop is provided, fall back to sampleProducts
//   const list = products && products.length ? products : sampleProducts;

//   // Filter by category unless "All" or falsy
//   const filtered =
//     selectedCategory && selectedCategory !== "All"
//       ? list.filter((p) => p.category === selectedCategory)
//       : list;

//   return (
//     <div>
//       <h2>Available Products</h2>

//       {filtered.length === 0 ? (
//         <p>No products match this category.</p>
//       ) : (
//         filtered.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             addToCart={addToCart}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.string.isRequired,
//       category: PropTypes.string,
//       inStock: PropTypes.bool
//     })
//   ),
//   selectedCategory: PropTypes.string,
//   addToCart: PropTypes.func
// };

// ProductList.defaultProps = {
//   products: sampleProducts,
//   selectedCategory: "All",
//   addToCart: () => {}
// };

// export default ProductList;








import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

// Sample product data (for display and tests)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: true }
]

const ProductList = ({ products, selectedCategory, addToCart }) => {
  const list = products !== undefined ? products : sampleProducts

  const filtered =
    selectedCategory && selectedCategory.toLowerCase() !== 'all'
      ? list.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : list

  return (
    <div>
      <h2>Available Products</h2>

      {filtered.length === 0 ? (
        <p>No products available</p>
      ) : (
        filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  selectedCategory: PropTypes.string,
  addToCart: PropTypes.func
}


export default ProductList

