import NOTIFICATION_STATUS from '../enums/notification-status';
import { getNotificationObject } from '../utils/utils';
import { shoppingCartActions } from './shopping-cart-slice';
import { uiActions } from './ui-slice';

const firebaseUrl =
  'https://react-complete-guide-htt-465bc-default-rtdb.firebaseio.com/';
const shoppingCartUrl = firebaseUrl + 'shopping-cart.json';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(shoppingCartUrl);
      if (!response.ok) {
        throw new Error('Deu ruim');
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        shoppingCartActions.replaceCart({
          shoppingCartItems: cartData.shoppingCartItems || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification(
          getNotificationObject(
            NOTIFICATION_STATUS.ERROR,
            undefined,
            'Fetching Cart Data failed'
          )
        )
      );
    }
  };
};

export const sendCartData = (shoppingCart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification(
        getNotificationObject(NOTIFICATION_STATUS.PENDING)
      )
    );

    const sendRequest = async () => {
      const response = await fetch(shoppingCartUrl, {
        method: 'PUT',
        body: JSON.stringify({
          shoppingCartItems: shoppingCart.shoppingCartItems,
          totalQuantity: shoppingCart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('DEU RUIM!!!');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification(
          getNotificationObject(NOTIFICATION_STATUS.SUCCESS)
        )
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification(
          getNotificationObject(NOTIFICATION_STATUS.ERROR)
        )
      );
    }
  };
};
