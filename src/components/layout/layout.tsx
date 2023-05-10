import {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";
import clsx from "clsx";

export const Layout: FC = () => {

  const activeLink = ({isActive}: {isActive: boolean}) => clsx('text-white hover:text-gray-400', {
    'text-fuchsia-700': isActive,
    'text-white': !isActive,

  })

  return (
    <div className="w-full h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex">
          <nav className="w-1/4 pr-10 bg-gray-700 rounded mr-2 p-5">
            <h1 className="text-2xl font-bold text-white mb-5">Spotify BETA</h1>
            <ul>
              <li>
                <NavLink to="/home" className={activeLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={activeLink}>Users</NavLink>
              </li>
            </ul>
          </nav>
          <div className="w-3/4 bg-gray-700 p-5 rounded">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>

  );
};
