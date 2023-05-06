import { FC } from 'react';
import { ACTIONS, IReducerAction } from '../../store/reducer';
import { IParams } from '../../types/hamburger';
import Button from '../UI/Button/Button';

interface IHamburgerItem {
  title: string;
  state: IParams[];
  dispatchFunk: React.Dispatch<IReducerAction>;
  type: ACTIONS;
}

const HamburgerItem: FC<IHamburgerItem> = ({
  title,
  state,
  dispatchFunk,
  type,
}) => {
  return (
    <div>
      <li className="flex gap-5 w-full justify-between items-center flex-wrap">
        <p className="text-[20px] mb-5 basis-full text-center">{title}</p>
        <div className="flex w-full justify-between gap-5">
          {state.map((el) => (
            <Button
              key={el.id}
              dispatchFun={dispatchFunk}
              payload={el}
              type={type}
            />
          ))}
        </div>
      </li>
    </div>
  );
};

export default HamburgerItem;
