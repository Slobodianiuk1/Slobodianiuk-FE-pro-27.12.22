import React, {FC} from 'react';
import styles from './Index.module.css';

interface IWinnerBoxProps {
  winners: string[];
}

const WinnerBox: FC<IWinnerBoxProps> = ({winners})=> {
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
