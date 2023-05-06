import React, {FC} from "react";
import {IState} from "../../types/hamburger";
import {RiDeleteBin5Line} from "react-icons/all";
import {ACTIONS, IReducerAction} from "../../store/reducer";

interface IResultBox {
    state: IState
    dispatchFunk: React.Dispatch<IReducerAction>
    type: ACTIONS
}

const ResultBox: FC<IResultBox> = ({state, dispatchFunk, type}) => {
    return (
        <div>
            <div className="mt-5 rounded bg-gray-500 p-5">
                <div>
                    {state.checkedList &&
                        state.checkedList.map(payload => (
                            <div key={payload.name} className="flex justify-between bg-green-600 rounded mb-4 p-3">
                                <p>
                                    {payload.name}
                                </p>

                                <p>
                                    calories: {payload.calories}
                                </p>

                                <p>
                                    {payload.price}$
                                </p>

                                <button  onClick={() => dispatchFunk({ type, payload })}>
                                    <RiDeleteBin5Line fontSize={25} className="hover:scale-125 transition"/>
                                </button>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between bg-blue-600 p-2 rounded'>
                    <p>
                        Calories: {state.calories}

                    </p>
                    <p>
                        Price: {state.total}$
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ResultBox;