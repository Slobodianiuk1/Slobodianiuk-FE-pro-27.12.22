function addButtonClicked (event) {
	event.preventDefault();
	const list = document.getElementById("list");

	let inputValue = document.getElementById('newItemInput');
	if (inputValue.value === '') return;

	let newItem = document.createElement("li");
	newItem.innerHTML = inputValue.value;
	newItem.className = 'added-item';

	list.appendChild(newItem);

	newItem.addEventListener('click', function () {
		this.classList.toggle('selected-item');
	});

	checkListLength();
	inputValue.value = '';
	handlerChengeInput();
}

function removeButtonClicked (event) {
	event.preventDefault();
	let lastItem = document.getElementById("list").lastChild;
	document.getElementById("list").removeChild(lastItem);

	checkListLength();
}

function checkListLength () {
	const countList = document.getElementById("list").children.length;
	const removeButton = document.getElementById("removeButton");
	const deleteButton = document.querySelector('.delete-all');
	const selectedDelete = document.querySelector('.deleteIsCompleted');

	if (countList > 0) {
		removeButton.removeAttribute('disabled');
		deleteButton.removeAttribute('disabled');
		selectedDelete.removeAttribute('disabled');
		removeButton.classList.remove('button-disabled');
		deleteButton.classList.remove('button-disabled');
		selectedDelete.classList.remove('button-disabled');

	} else {
		removeButton.classList.add('button-disabled');
		deleteButton.classList.add('button-disabled');
		selectedDelete.classList.add('button-disabled');
		removeButton.setAttribute('disabled', 'disabled');
		deleteButton.setAttribute('disabled', 'disabled');
		selectedDelete.setAttribute('disabled', 'disabled');
	}
	checkCountList()

}


function checkCountList () {
	const list = document.getElementById('list').childElementCount;
	const div = document.getElementById('count-list');
	div.innerHTML = list ? `Total: ${list}` : `List is empty`
}


function deleteAll () {
	const list = document.getElementById('list');
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
	checkListLength()
}

function handlerChengeInput () {
	const input = document.getElementById('newItemInput');
	const addButton = document.getElementById('addButton');
	if (input.value) {
		addButton.classList.remove('button-disabled');
		addButton.removeAttribute('disabled');
	} else {
		addButton.classList.add('button-disabled');
		addButton.setAttribute('disabled', 'disabled');
	}
}

function checkIsCompleted () {
	const list = document.getElementById('list')
	const listChildren = list.children;
	for (let i = 0; i < listChildren.length; i++) {
		if (listChildren[i].classList.contains('selected-item')) {
			// listChildren[i].style.display = 'none'
			list.removeChild(listChildren[i])
		}
	}
	checkListLength()
}

