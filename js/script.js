document.addEventListener("DOMContentLoaded", () => {

	const list = document.getElementById("list");
	const input = document.getElementById('newItemInput');
	const addButton = document.getElementById('addButton');
	const removeButton = document.getElementById("removeButton");
	const deleteButton = document.querySelector('.delete-all');
	const selectedDelete = document.querySelector('.deleteIsCompleted');

	function addButtonClicked (event) {
		event.preventDefault();
		const inputValue = input.value.trim();
		if (!inputValue) return;

		const newItem = document.createElement("li");
		newItem.textContent = inputValue;
		newItem.classList.add('added-item');

		list.appendChild(newItem);

		newItem.addEventListener('click', function () {
			this.classList.toggle('selected-item');
			checkListLength()
		});

		input.value = '';

		checkListLength();
		handlerChengeInput();
	}

	function removeButtonClicked (event) {
		event.preventDefault();
		const lastItem = document.getElementById("list").lastChild;
		lastItem && lastItem.remove();

		checkListLength();
	}

	function checkListLength () {
		const countList = list.children.length;

		const setDisabled = (button, isDisabled) => {
			button.disabled = isDisabled;
			button.classList.toggle('button-disabled', isDisabled);
		};

		setDisabled(removeButton, countList <= 0);
		setDisabled(deleteButton, countList <= 0);
		setDisabled(selectedDelete, countList <= 0 || !list.querySelector('.selected-item'));
		document.getElementById('count-list').textContent = countList ? `Total: ${countList}` : `List is empty`;
	}

	function deleteAll () {
		document.getElementById('list').innerHTML = '';
		checkListLength();
	}

	function handlerChengeInput () {
		addButton.disabled = addButton.classList.toggle('button-disabled', !input.value);
	}

	function checkIsCompleted () {
		const selectedItems = list.querySelectorAll('.selected-item');

		selectedItems.forEach(el => el.remove());
		checkListLength();
	}

	function saveListToLocalStorage () {
		const list = document.getElementById('list');

		const listHtml = list.innerHTML;
		localStorage.setItem('listHtml', listHtml);
	}



	const listHtml = localStorage.getItem('listHtml');
	if (listHtml) {
		const list = document.getElementById('list');
		list.innerHTML = listHtml;
		[...list.children].forEach(el => {
			el.addEventListener('click', () => {
				el.classList.toggle('selected-item');
				checkListLength()
			})
		})

		checkListLength()

	}

	window.addEventListener('beforeunload', saveListToLocalStorage);
	input.addEventListener('input', handlerChengeInput);
	removeButton.addEventListener('click', (event) => removeButtonClicked(event));
	addButton.addEventListener('click', (event) => addButtonClicked(event));
	deleteButton.addEventListener('click', deleteAll);
	selectedDelete.addEventListener('click', checkIsCompleted);
});





