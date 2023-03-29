import {instance} from "../../../axios";

export const commentApi = async (postId: number) => {
    try {
        const response = await instance.get(`/comments`, {
            params : {
                postId
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}