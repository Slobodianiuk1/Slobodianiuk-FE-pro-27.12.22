import { FC, useState } from 'react';
import Emoji from '../Emoji/Index';
import WinnerBox from '../WinnerBox/Index';
import styles from './Index.module.css';

const Post: FC = (): JSX.Element => {
  const [isInfo, setIsInfo] = useState<boolean>(false);
  const [emoji, setEmoji] = useState({
    emojiList: [
      { id: 1, emoji: '💪', count: 0 },
      { id: 2, emoji: '🤯', count: 0 },
      { id: 3, emoji: '🚀', count: 0 },
      { id: 4, emoji: '😇', count: 0 },
      { id: 5, emoji: '👍', count: 0 },
    ],
    winners: [''],
  });

  const listEmoji = emoji.emojiList;
  const winners = emoji.winners;

  const handleEmojiClick = (id: number): void => {
    const countEmoji = listEmoji.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, count: emoji.count + 1 };
      }
      return emoji;
    });
    setEmoji({ ...emoji, emojiList: countEmoji });
  };

  const showResults = (): void => {
    setIsInfo((prev) => !prev);
    if (!isInfo) {
      const listCount = listEmoji.map((obj) => obj.count);
      const maxNumber = Math.max(...listCount);
      const winners = listEmoji
        .filter((obj) => obj.count === maxNumber && obj.emoji)
        .map((obj) => obj.emoji);
      setEmoji({ ...emoji, winners: [...winners] });
    }
  };

  return (
    <div>
      <h2>Choose your favorite smiley:</h2>
      <div className={styles.box}>
        {listEmoji.map(({ id, emoji, count }) => (
          <Emoji
            key={id}
            id={id}
            emoji={emoji}
            count={count}
            onClick={handleEmojiClick}
          />
        ))}
      </div>
      <button className={styles.btn} onClick={() => showResults()}>
        {isInfo ? 'Hidden Results' : 'Show Results'}
      </button>
      {isInfo && <WinnerBox winners={winners} />}
    </div>
  );
};

export default Post;
