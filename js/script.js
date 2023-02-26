function addButtonClicked (event) {
	event.preventDefault();

	const list = document.getElementById("list");
	const inputValue = document.getElementById('newItemInput').value.trim();

	if (!inputValue) return;

	const newItem = document.createElement("li");
	newItem.textContent = inputValue;
	newItem.classList.add('added-item');

	list.appendChild(newItem);

	newItem.addEventListener('click', function () {
		this.classList.toggle('selected-item');
		checkListLength()
	});

	document.getElementById('newItemInput').value = '';

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
	const list = document.getElementById("list");
	const countList = list.children.length;
	const removeButton = document.getElementById("removeButton");
	const deleteButton = document.querySelector('.delete-all');
	const selectedDelete = document.querySelector('.deleteIsCompleted');

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
	const input = document.getElementById('newItemInput');
	const addButton = document.getElementById('addButton');
	addButton.disabled = addButton.classList.toggle('button-disabled', !input.value);
}

function checkIsCompleted () {
	const list = document.getElementById('list');
	const selectedItems = [...list.querySelectorAll('.selected-item')];

	selectedItems.forEach(el => el.remove());
	checkListLength();
}