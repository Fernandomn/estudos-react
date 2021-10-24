import { useDispatch, useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import { uiActions } from '../../store/ui-slice';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const getShoppingCartTotal = useSelector(
    (state) => state.shoppingCart.totalQuantity
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleDisplayCart());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton
              onClick={toggleCartHandler}
              total={getShoppingCartTotal}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
