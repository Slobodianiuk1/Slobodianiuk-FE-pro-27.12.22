import { hamburger } from '../mocks /hamburger';
import { IParams, IState } from '../types/hamburger';

export const enum ACTIONS {
  ADD_SIZE = 'ADD_SIZE',
  REMOVE = 'REMOVE',
  ADD_FILLINGS = 'ADD_FILLINGS',
  ADD_EXTRAS = 'ADD_EXTRAS',
}

export const initialState: IState = {
  hamburger,
  checkedList: [],
  total: 0,
  calories: 0,
};

export interface IReducerAction {
  type: ACTIONS;
  payload?: IParams;
}

export const reducer = (state: IState, action: IReducerAction): IState => {
  switch (action.type) {
    case ACTIONS.ADD_SIZE: {
      const updatedSize = updateItems(state.hamburger.size, action.payload!);
      const [total, calories, checkedList] = getResult(
        updatedSize,
        state.hamburger.fillings,
        state.hamburger.extras
      );

      return {
        ...state,
        hamburger: { ...state.hamburger, size: updatedSize },
        total,
        calories,
        checkedList,
      };
    }

    case ACTIONS.ADD_FILLINGS: {
      const updatedFillings = updateItemsToggle(
        state.hamburger.fillings,
        action.payload!
      );
      const [total, calories, checkedList] = getResult(
        state.hamburger.size,
        updatedFillings,
        state.hamburger.extras
      );

      return {
        ...state,
        hamburger: { ...state.hamburger, fillings: updatedFillings },
        total: total,
        calories,
        checkedList,
      };
    }

    case ACTIONS.ADD_EXTRAS: {
      const updatedExtras = updateItemsToggle(
        state.hamburger.extras,
        action.payload!
      );
      const [total, calories, checkedList] = getResult(
        state.hamburger.size,
        state.hamburger.fillings,
        updatedExtras
      );
      return {
        ...state,
        hamburger: { ...state.hamburger, extras: updatedExtras },
        total,
        calories,
        checkedList,
      };
    }

    case ACTIONS.REMOVE: {
      const remove = state.checkedList.filter(
        (item) => item.id !== action.payload?.id
      );
      for (const key in state.hamburger) {
        if (Object.prototype.hasOwnProperty.call(state.hamburger, key)) {
          state.hamburger[key as keyof typeof state.hamburger] =
            state.hamburger[key as keyof typeof state.hamburger].map((el) => {
              if (action.payload?.id === el.id) {
                return { ...el, isChecked: !el.isChecked };
              }
              return el;
            });
        }
      }
      const [total, calories] = getResult(
        state.hamburger.size,
        state.hamburger.fillings,
        state.hamburger.extras
      );
      return { ...state, checkedList: remove, total, calories };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const updateItems = (items: IParams[], payload: IParams) =>
  items.map((item) => ({
    ...item,
    isChecked: item.id === payload?.id,
  }));

const updateItemsToggle = (items: IParams[], payload: IParams) =>
  items.map((item) => ({
    ...item,
    isChecked: item.id === payload?.id ? !payload?.isChecked : item.isChecked,
  }));

const getResult = (
  size: IParams[],
  fillings: IParams[],
  extras: IParams[]
): [number, number, IParams[]] => {
  const checkedList = [...size, ...fillings, ...extras].filter(
    (item) => item.isChecked
  );
  const total = checkedList.reduce((sum, item) => sum + item.price, 0);
  const calories = checkedList.reduce((sum, item) => sum + item.calories, 0);

  return [total, calories, checkedList];
};
