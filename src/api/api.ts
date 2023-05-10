import axios from "axios";
import {IUsers} from "../components/pages/Users/Users.type.ts";
import {IAlbum} from "../components/Albom/Album.type.ts";
import {LoaderFunction} from "react-router-dom";
import {IPhotoAlbum} from "../components/PhotoAlbom/PhotoAlbum.ts";

export const usersData = async (): Promise<IUsers[]> => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

  return data
}

export const albumData: LoaderFunction = async ({params}): Promise<IAlbum[]> => {
  const {data} = await axios.get<IAlbum[]>(`https://jsonplaceholder.typicode.com/albums/?userId=${params.id}`)

  return data
}

export const photoData: LoaderFunction = async ({params}): Promise<IPhotoAlbum[]> => {
  const {data} = await axios.get<IPhotoAlbum[]>(`https://jsonplaceholder.typicode.com/photos/?albumId=${params.phoneId}`)

  return data
}

