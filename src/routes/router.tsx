import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../components/layout/layout.tsx";
import {Home} from "../components/pages/Home/Home.tsx";
import {Users} from "../components/pages/Users/Users.tsx";
import {albumData, photoData, usersData} from "../api/api.ts";
import {Album} from "../components/Albom/Album.tsx";
import {PhotoAlbum} from "../components/PhotoAlbom/PhotoAlbum.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/home',
        Component: Home,
        index: true
      },
      {
        path: '/users',
        Component: Users,
        loader: usersData,
        children: [
          {
            path: 'album/:id',
            Component: Album,
            loader: albumData,
            children: [
              {
                path: 'photo/:phoneId',
                Component: PhotoAlbum,
                loader: photoData
              }
            ]
          },

        ]
      }
    ]
  }
])