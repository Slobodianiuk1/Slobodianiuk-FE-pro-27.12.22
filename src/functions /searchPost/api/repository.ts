import {instance} from "../../../axios";
import {IApiProps, } from "./dto";


export const postApi = async ({id} : IApiProps): Promise<any> => {
    try {
        const response = await instance.get(`/posts/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}



