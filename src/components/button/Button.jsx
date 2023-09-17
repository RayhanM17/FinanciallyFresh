import Link from 'next/link';
import styles from './button.module.sass';

export const IconTypes = {
  ARROW_RIGHT: 'ARROW_RIGHT'
};

const Button = (props) => {
  // Determine the class based on the isAlt prop
  const buttonClass = props.isAlt ? `${styles.button} ${styles.alt}` : styles.button;

  if (props.href) {
    return (
      <Link className={buttonClass} href={props.href}>
        {props.children}
        <Button.Icon iconType={props.icon} />
      </Link>
    );
  }

  return <button className={buttonClass}>{props.children}</button>;
};

Button.Icon = ({ iconType }) => {
  if (iconType === 'ARROW_RIGHT') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="0.88em" viewBox="0 0 320 512">
        <path fill="#8CBA80" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
      </svg>
    );
  }
  return null;
};

export default Button