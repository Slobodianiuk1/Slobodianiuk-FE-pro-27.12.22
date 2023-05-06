export interface IParams {
  id: number;
  name: string;
  price: number;
  calories: number;
  isChecked: boolean;
}

export interface IState {
  hamburger: {
    size: IParams[];
    fillings: IParams[];
    extras: IParams[];
  };
  checkedList: IParams[];
  total: number;
  calories: number;
}
