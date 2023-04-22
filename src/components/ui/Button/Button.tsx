import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  typeBtn?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  disabled = false,
  typeBtn = 'button',
}: ButtonProps) => {
  return (
    <button type={typeBtn} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
