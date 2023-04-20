import React, {FC} from 'react';
import styles from './Index.module.css';

interface IWinnerBox {
  winners: string[];
}

const WinnerBox: FC<IWinnerBox> = ({winners}: IWinnerBox): JSX.Element => {
  return (
    <div className={styles.box}>
      emojis won:
      {winners.map((str, index) => (
        <div key={index}>{str}</div>
      ))}
    </div>
  );
};

export default WinnerBox;
