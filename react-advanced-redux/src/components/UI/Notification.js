import NOTIFICATION_STATUS from '../../enums/notification-status';
import classes from './Notification.module.css';

const Notification = (props) => {
  let specialClasses = '';

  if (props.status === NOTIFICATION_STATUS.ERROR) {
    specialClasses = classes.error;
  }
  if (props.status === NOTIFICATION_STATUS.SUCCESS) {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
