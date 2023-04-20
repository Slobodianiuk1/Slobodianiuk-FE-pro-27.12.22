import React, { FC } from 'react';
import { IPropsEmoji } from '../../types/types';

const Emoji: FC<IPropsEmoji> = ({
  id,
  emoji,
  onClick,
  count,
}: IPropsEmoji): JSX.Element => {
  return (
    <button onClick={() => onClick(id)}>
      {emoji}
      <p className="count">{count}</p>
    </button>
  );
};

export default Emoji;
