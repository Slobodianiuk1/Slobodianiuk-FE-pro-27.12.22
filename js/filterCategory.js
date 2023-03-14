function showProductsByCategory (category,products,showAllProducts) {
	ROOT_MAIN.innerHTML = "";

	const filteredProducts = products.filter((product) => product.category === category);
	filteredProducts.forEach((product) => {
		const card = createProductCard(product);
		ROOT_MAIN.appendChild(card);
	});

	!filteredProducts.length && showAllProducts()
}