import {postApi} from "./api/repository";
import {comments, post} from "../../main";
import {IReturnPost} from "./api/dto";
import {showComments} from "../showCommets/showComments";

export const searchPost = async (event: MouseEvent, id: number): Promise<void> => {
    event.preventDefault();
    if (id > 100 || id < 1) return
    comments.innerHTML = ""
    post.innerHTML =
        `
               <li class="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <div class="h-8 bg-gray-400 mb-4 rounded mb-5"></div>
                    <div class="h-[150px] bg-gray-400 mb-4 rounded mb-5"></div>
                    <div class="bg-gray-400 border-gray-400 border-4 rounded h-7 w-1/3"></div>
                </li>
              `
    const postId = {id};
    const postData = await postApi(postId);
    fillPost(postData)

}

const fillPost = (postData: IReturnPost) => {
    post.innerHTML =
        `
                <li class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-5">
                    <h2 class="text-xl font-bold mb-4">${postData.title}</h2>
                    <p class="text-gray-700 text-base mb-4">${postData.body}</p>
                    <button class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                    id="show-comment">
                    Show comments
                    </button>
                </li>
              `
    const showBtnComment = document.getElementById('show-comment') as HTMLButtonElement

    showBtnComment.addEventListener("click", () => showComments(postData.id))
}







