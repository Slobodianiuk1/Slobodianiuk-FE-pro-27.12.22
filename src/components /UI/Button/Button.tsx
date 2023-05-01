import React, {FC} from "react";
import clsx from "clsx";
import {ACTIONS, IReducerAction} from "../../../store/reducer.ts";
import {IParams} from "../../../types/hamburger.ts";

interface IButtonProps {
  payload: IParams
  dispatchFunk:React.Dispatch<IReducerAction>
  type: ACTIONS
}

const Button: FC<IButtonProps> = ({ payload, dispatchFunk, type,}) => {
  const styleBtn = (isChecked:boolean): string => clsx('rounded p-3 basis-1/2 bg-fuchsia-900', {
    'bg-fuchsia-400': isChecked
  })

  return (
    <button
      className={styleBtn(payload.isChecked)}
      onClick={() => dispatchFunk({type, payload})}
    >
      {payload.name}
    </button>
  );
};

export default Button;