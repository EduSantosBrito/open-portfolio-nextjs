import styles from '@styles/components/Button/default.module.scss';
import { FC } from 'react';

type ButtonProps = {
  onClick: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  onClick,
  className,
  children,
}): JSX.Element => {
  return (
    <button className={`${styles.button} ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
