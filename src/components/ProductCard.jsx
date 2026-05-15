// // import React from 'react'
// // import styles from '../styles/ProductCard.module.css'

// // const ProductCard = ({ product }) => {
// //   return (
// //     <div
// //       className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
// //     >
// //       <h3>{product.name}</h3>
// //       <p>Price: {product.price}</p>
// //       <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

// //       {/* TODO: Implement Add to Cart button functionality */}
// //       <button data-testid={'product-' + product.id}>Add to Cart</button>
// //     </div>
// //   )
// // }

// // export default ProductCard



// import React from 'react'
// import PropTypes from 'prop-types'
// import styles from '../styles/ProductCard.module.css'

// const ProductCard = ({ product, addToCart }) => {
//   const handleAdd = () => {
//     if (product.inStock && typeof addToCart === 'function') {
//       addToCart(product)
//     }
//   }

//   return (
//     <div
//       className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
//       aria-live="polite"
//     >
//       <h3 className={styles.title}>{product.name}</h3>
//       <p className={styles.price}>Price: ${Number(product.price).toFixed(2)}</p>
//       <p className={styles.status}>
//         Status: {product.inStock ? 'In Stock' : 'Out of Stock'}
//       </p>

//       <button
//         data-testid={'product-' + product.id}
//         className={`${styles.button} ${!product.inStock ? styles.disabled : ''}`}
//         onClick={handleAdd}
//         disabled={!product.inStock}
//         aria-disabled={!product.inStock}
//         aria-label={
//           product.inStock
//             ? `Add ${product.name} to cart`
//             : `${product.name} is out of stock`
//         }
//       >
//         {product.inStock ? 'Add to Cart' : 'Out of Stock'}
//       </button>
//     </div>
//   )
// }

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     inStock: PropTypes.bool
//   }).isRequired,
//   addToCart: PropTypes.func
// }

// ProductCard.defaultProps = {
//   addToCart: () => {}
// }

// export default ProductCard




           
import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  const handleAdd = () => {
    if (product.inStock && typeof addToCart === 'function') {
      addToCart(product)
    }
  }

  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
      aria-live="polite"
    >
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>Price: {product.price}</p>
      <p className={styles.status}>
        Status: {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <button
        data-testid={'product-' + product.id}
        className={`${styles.button} ${!product.inStock ? styles.disabled : ''}`}
        onClick={handleAdd}
        disabled={!product.inStock}
        aria-disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    inStock: PropTypes.bool
  }).isRequired,
  addToCart: PropTypes.func
}

export default ProductCard
