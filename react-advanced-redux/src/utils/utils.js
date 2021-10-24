import NOTIFICATION_STATUS from '../enums/notification-status';

export const getNotificationObject = (status, title = '', message = '') => {
  switch (status) {
    case NOTIFICATION_STATUS.PENDING:
      return {
        status: NOTIFICATION_STATUS.PENDING,
        title: title || 'Sending...',
        message: message || 'Sending Cart Data!',
      };
    case NOTIFICATION_STATUS.SUCCESS:
      return {
        status: NOTIFICATION_STATUS.SUCCESS,
        title: title || 'Success!',
        message: message || 'Sent Cart Data successfully!',
      };
    case NOTIFICATION_STATUS.ERROR:
    default:
      return {
        status: NOTIFICATION_STATUS.ERROR,
        title: title || 'Error.',
        message: message || 'Sent Cart Data failed!',
      };
  }
};
