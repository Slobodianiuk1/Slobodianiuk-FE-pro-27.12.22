const API_URL = 'https://fakestoreapi.com/products';

fetch(API_URL)
	.then((res) => res.json())
	.then((data) => {
		renderPage(data)
	})






