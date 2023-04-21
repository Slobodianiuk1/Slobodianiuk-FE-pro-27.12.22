export interface IEmoji {
  id: number;
  emoji: string;
  count: number;
}

export interface IPropsEmoji extends IEmoji {
  onClick: (id: number) => void;
  disabled: boolean;
}
