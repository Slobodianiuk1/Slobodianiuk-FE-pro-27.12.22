export interface IEmoji {
  id: number;
  emoji: string;
  count: number;
}

export interface IPropsEmoji extends IEmoji {
  onClick: (id: number) => void;
  disabled: boolean;
}

export interface IEmojiData {
    emojiList: IEmoji[]
    winners: string[]
}

