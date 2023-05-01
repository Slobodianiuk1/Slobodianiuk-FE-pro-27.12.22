import {FC, useReducer} from 'react'
import {ACTIONS, initialState, reducer,} from '../../store/reducer.ts'
import Button from "../UI/Button/Button.tsx";

export const Hamburger: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const sizeFilter = state.hamburger.size.filter(item =>  item.isChecked === true)

  return (
    <div className="container mx-auto p-5 h-full min-h-screen flex justify-center items-center">
      <div className="rounded bg-gray-700 p-5 w-full ">
        <h1 className="text-[32px] mb-5">
          Hamburger
        </h1>

        <ul className={'flex flex-col gap-5'}>
          <li className="flex gap-5 w-full justify-between">
            {state.hamburger.size
              .map((el) => (
                <Button key={el.id}
                        dispatchFunk={dispatch}
                        payload={el}
                        type={ACTIONS.ADD_SIZE}

                />
              ))}
          </li>

        </ul>

        <div className="mt-5 rounded bg-gray-500">
          {
             sizeFilter.map(item =>(
              <p key={item.id}>
                {item.name}
              </p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

