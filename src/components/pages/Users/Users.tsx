import {FC} from "react";
import {Link, Outlet, useLoaderData, useParams} from "react-router-dom";
import {IUsers} from "./Users.type.ts";

export const Users: FC = () => {
  const users = useLoaderData() as IUsers[];
  const {id} = useParams()
  return (
    <div className="flex flex-col gap-4">
      {users.map(user => (
        <div key={user.id}>
          <div className="flex items-center justify-between p-3 rounded bg-gray-600">
            <div className="text-white mr-3">{user.name}</div>
            <Link
              to={`/users/${user.id === Number(id) ? '' : 'album/' + user.id}`}
              className="bg-fuchsia-900 text-white rounded py-2 px-3 hover:bg-fuchsia-700"
            >
              {user.id === Number(id) ? 'Album show' : 'Album hidden'}
            </Link>
          </div>
          {user.id === Number(id) && <Outlet/>}
        </div>
      ))}
    </div>
  );
};
