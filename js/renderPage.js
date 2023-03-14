function renderPage (products) {
	const categories = products.reduce((acc, cur) => {
		if (!acc.includes(cur.category)) {
			acc.push(cur.category);
		}
		return acc;
	}, ['all']);


	createHeader(categories, products, showAllProducts)

	function showAllProducts () {
		document.querySelector('.category-item').classList.add('active')
		ROOT_MAIN.innerHTML = "";
		products.forEach((product) => {
			const card = createProductCard(product);
			ROOT_MAIN.appendChild(card);
		});
	}

	showAllProducts();
}