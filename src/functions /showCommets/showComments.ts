import {commentApi} from "./api/repository";
import {IComments} from "./api/dto";

export const showComments = async (postId: number): Promise<void> => {
    const comments = document.getElementById('comments') as HTMLElement;
    const showBtnComment = document.getElementById('show-comment') as HTMLButtonElement

    if (comments.childElementCount) {
        comments.classList.add("hidden")
        comments.innerHTML = ''
        showBtnComment.textContent = 'Show comments'
        showBtnComment.className = 'flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
        return
    } else {
        comments.classList.remove("hidden")
        comments.innerHTML = `
        <li class="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <div class="h-8 bg-gray-400 mb-4 rounded mb-5"></div>
                    <div class="h-[150px] bg-gray-400 mb-4 rounded mb-5"></div>
                    <div class="bg-gray-400 border-gray-400 border-4 rounded h-7 w-1/3"></div>
                </li>`
        showBtnComment.textContent = 'Hidden comments'
        showBtnComment.className = 'flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded'
    }
    const commentsData = await commentApi(postId);
    comments.innerHTML = ''
    fillComment(comments, commentsData);
};

const fillComment = (comments: HTMLElement, commentsData: IComments[]) => {
    commentsData.forEach((comment) => {
        const li = document.createElement('li');
        li.className = ' shadow-md  px-8 pt-6 pb-8 border-t border-black';
        li.innerHTML = `
           <h2 class="text-xl font-medium mb-2">${comment.name}</h2>
           <p class="text-gray-600 mb-4">Posted by ${comment.email}</p>
           <p class="text-gray-600 mb-4"> ${comment.body}</p>
        `;
        comments.appendChild(li);
    });
};