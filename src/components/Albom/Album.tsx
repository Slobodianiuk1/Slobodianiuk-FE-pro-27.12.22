import {FC} from "react";
import {Link, Outlet, useLoaderData, useParams} from "react-router-dom";
import {IAlbum} from "./Album.type.ts";

export const Album: FC = () => {
  const albums = useLoaderData() as IAlbum[]
  const {phoneId} = useParams()

  return (
    <div>{
      albums.map(album => (
        <div key={album.id} className="text-white">
          <div className="flex gap-5">
            <div>
              {album.id}.
            </div>
            <Link to={`${album.id === Number(phoneId) ? '' : 'photo/' + album.id}`}>
              {album.title}
            </Link>
          </div>

          {album.id === Number(phoneId) && <Outlet/>}
        </div>
      ))
    }</div>
  )
}