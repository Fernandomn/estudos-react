import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const shoppingCartItems = useSelector(
    (state) => state.shoppingCart.shoppingCartItems
  );

  const getCartItemList = () =>
    shoppingCartItems.map((item) => <CartItem key={item.id} item={item} />);

  const isShoppingCartEmpty =
    !shoppingCartItems || shoppingCartItems.length === 0;

  const cardContent = isShoppingCartEmpty ? (
    <p>Your cart is empty</p>
  ) : (
    <ul>{getCartItemList()}</ul>
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cardContent}
    </Card>
  );
};

export default Cart;
