import './style.scss'
import {searchPost} from "./functions /searchPost/searchPost";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="bg-gray-700 min-h-screen">
  <section class="w-full max-w-lg mx-auto py-8">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="search">
        Search post (1-100):
      </label>
      <div class="flex items-center border-b border-b-2 border-gray-400 py-2">
        <input 
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="number" 
        name="search" 
        id="search" 
        placeholder="Enter post ID" 
        min="1" 
        max="100">
        <button 
        class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" 
    
        id="search-btn"
        >
          Search
        </button>
      </div>
      
     <p class="opacity-0 h-[24px] text-red-500" id="valid">invalid number (1-100)*</p>
    </form>
    <ul class="list-none" id="post">
    </ul>
     <ul class="hidden list-none bg-white rounded" id="comments">
    </ul>
  </section>
</main>
`

const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
const input = document?.getElementById('search') as HTMLButtonElement;
export const post = document.getElementById('post') as HTMLButtonElement
export const comments = document.getElementById('comments') as HTMLButtonElement
export const valid = document.getElementById('valid') as HTMLButtonElement

searchBtn.addEventListener('click', (event: MouseEvent) => searchPost(event, +input.value));
input?.addEventListener('input', (event: Event) => qwe(event));

function qwe(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    valid.classList[value <= 100 && value >= 1 ? 'add' : 'remove']('opacity-0');
}