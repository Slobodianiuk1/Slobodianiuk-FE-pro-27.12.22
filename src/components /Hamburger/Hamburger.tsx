import { FC, useReducer } from 'react';
import { ACTIONS, initialState, reducer } from '../../store/reducer';
import ResultBox from '../ResultBox/ResultBox';
import HamburgerItem from '../HamburgerItem/HamburgerItem';

export const Hamburger: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mx-auto p-5 h-full min-h-screen flex justify-center ">
      <div className="rounded bg-gray-700 p-5 w-full ">
        <h1 className="text-[32px] mb-5">Hamburger</h1>
        <ul className={'flex flex-col gap-5'}>
          <HamburgerItem
            title={'Size'}
            state={state.hamburger.size}
            dispatchFunk={dispatch}
            type={ACTIONS.ADD_SIZE}
          />

          <HamburgerItem
            title={'Fillings:'}
            state={state.hamburger.fillings}
            dispatchFunk={dispatch}
            type={ACTIONS.ADD_FILLINGS}
          />

          <HamburgerItem
            title={'Extras:'}
            state={state.hamburger.extras}
            dispatchFunk={dispatch}
            type={ACTIONS.ADD_EXTRAS}
          />
        </ul>
        {!!state.checkedList.length && (
          <ResultBox
            state={state}
            dispatchFunk={dispatch}
            type={ACTIONS.REMOVE}
          />
        )}
      </div>
    </div>
  );
};
