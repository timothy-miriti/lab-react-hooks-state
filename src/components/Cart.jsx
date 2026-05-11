// // import React from 'react'

// // const Cart = () => {
// //   return (
// //     <div>
// //       <h2>Shopping Cart</h2>
// //       <ul>
// //         {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Cart


// import React from "react";
// import PropTypes from "prop-types";

// const Cart = ({ items, removeFromCart }) => {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {items.length === 0 ? (
//           <li className="cart-empty">Your cart is empty.</li>
//         ) : (
//           items.map((item) => (
//             <li key={item.id} data-testid={`cart-item-${item.id}`} className="cart-item">
//               {item.name} is in your cart.
//               <button
//                 type="button"
//                 className="remove-btn"
//                 onClick={() => removeFromCart && removeFromCart(item.id)}
//                 aria-label={`Remove ${item.name} from cart`}
//               >
//                 Remove
//               </button>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// Cart.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       name: PropTypes.string.isRequired
//     })
//   ),
//   removeFromCart: PropTypes.func
// };

// Cart.defaultProps = {
//   items: [],
//   removeFromCart: () => {}
// };

// export default Cart;





import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ items, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.length === 0 ? (
          <li className="cart-empty">Your cart is empty.</li>
        ) : (
          items.map((item) => (
            <li key={item.id} data-testid={`cart-item-${item.id}`}>
              {item.name} is in your cart.
              <button
                type="button"
                onClick={() => removeFromCart && removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
                style={{ marginLeft: 8 }}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  removeFromCart: PropTypes.func
}

Cart.defaultProps = {
  items: [],
  removeFromCart: () => {}
}

export default Cart
