import { FC } from 'react';
import clsx from 'clsx';
import { ACTIONS, IReducerAction } from '../../../store/reducer';
import { IParams } from '../../../types/hamburger';

interface IButtonProps {
  payload: IParams;
  dispatchFun: React.Dispatch<IReducerAction>;
  type: ACTIONS;
}

const Button: FC<IButtonProps> = ({ payload, dispatchFun, type }) => {
  const styleBtn = (isChecked: boolean): string =>
    clsx('rounded p-3 w-full', {
      'bg-fuchsia-600': isChecked,
      'bg-fuchsia-900': !isChecked,
    });

  return (
    <button
      className={styleBtn(payload.isChecked)}
      onClick={() => dispatchFun({ type, payload })}
    >
      {payload.name}
    </button>
  );
};

export default Button;
