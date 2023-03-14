function createHeader (categories, products, showAllProducts) {
	categories.forEach((category) => {
		const div = document.createElement("div");
		div.classList.add('category-item')
		div.textContent = category;

		div.addEventListener("click", () => {
			const allCategories = document.querySelectorAll('.category-item')

			allCategories.forEach(category => category.classList.remove('active'))
			div.classList.add('active')
			showProductsByCategory(category, products, showAllProducts);
		});
		ROOT_HEADER.appendChild(div);
	});

	const input = document.createElement('input')
	input.setAttribute('type', 'text');
	input.setAttribute('placeholder', 'SEARCH');
	ROOT_HEADER.appendChild(input)


	const remove = document.createElement('button')
	remove.setAttribute('data-remove', 'remove')
	remove.textContent = 'X'
	ROOT_HEADER.appendChild(remove)

	const span = document.createElement('span')
	span.textContent = '| поиск в выбраной категории, c подсветкой букв |'
	ROOT_HEADER.appendChild(span)

	search(input, remove)

}


function createProductCard (product) {
	const card = document.createElement("div");
	card.classList.add("card");

	card.innerHTML = `
			<img src="${product.image}" alt="${product.title}">
			<h3 data-searh="title">${product.title}</h3>
			<p>Price: ${product.price}$ </p>
			<button class="btn-info"">INFO</button>
			`
	card.querySelector('.btn-info').addEventListener('click', () => {
		ROOT_POPUP.className = 'active'
		createProductPopup({...product})
	})

	return card
}

function createProductPopup ({title, image, description, price}) {


	ROOT_POPUP.innerHTML = `
				<div class="container-popup">
					<div class="header-popup">
						<div class="title">${title}</div>
						<div class="close" data-action="close">X</div>
					</div>
				<div class="content-popup">
					<div class="img"><img src="${image}" alt="${title}"></div>
					<div class="description">${description}</div>
				</div>
					<button class="btn-buy" data-action="buy">buy ${price}$</button>
				</div>
			`

	ROOT_POPUP.addEventListener('click', (e) => {
		const target = e.target.dataset.action

		if (target === 'buy') {
			ACTION.buy(title, image)
			setTimeout(() => {
				ROOT_BUY_INFO.innerHTML = ''
			}, 1000)
		} else target && ACTION[target]()
	})

	ROOT_BUY_INFO.addEventListener("click", (e) => {
		const target = e.target.dataset.action
		target && ACTION[target]()
	})
}