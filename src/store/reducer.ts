import {hamburger} from "../mocks /hamburger.ts";
import {IParams, IState} from "../types/hamburger.ts";

export const enum ACTIONS {
  ADD_SIZE = 'ADD_SIZE',
  REMOVE_SIZE = 'REMOVE_SIZE',
  ADD_FILLINGS = 'ADD_FILLINGS',
  ADD_EXTRAS = 'ADD_EXTRAS',
}

export const initialState: IState = {
  hamburger,
  total: 0,
  calories: 0,
}

export interface IReducerAction {
  type: ACTIONS,
  payload?: IParams
}

export const reducer = (state:  IState, action: IReducerAction): IState => {
  switch (action.type) {
    case ACTIONS.ADD_SIZE:
       const newSize = state.hamburger.size.map(item => {
         if (item.id === action.payload?.id) {
           return {...item, isChecked: true};
         }
         return {...item, isChecked: false};
      });
      return {...state, hamburger: {...state.hamburger, size: newSize}};
    default:
      throw new Error()
  }

}