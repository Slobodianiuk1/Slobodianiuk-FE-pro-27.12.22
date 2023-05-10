import {FC} from "react";
import {useLoaderData} from "react-router-dom";
import {IPhotoAlbum} from "./PhotoAlbum.ts";

export const PhotoAlbum: FC = () => {
  const photos = useLoaderData() as IPhotoAlbum[]

  return (
    <div  className="flex flex-wrap">
      {
        photos.map(photo => (
          <div className="w-[50px]" key={photo.id}>
            <img src={photo.url} alt={photo.title}/>
          </div>
        ))
      }
    </div>
  );
};
