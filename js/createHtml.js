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
						<div class="close" data-action="closeInfo">X</div>
					</div>
					<div class="content-popup">
						<div class="img"><img src="${image}" alt="${title}"></div>
						<div class="description">${description}</div>
					</div>
					<button class="btn-buy" data-action="form">buy <span id ="price">${price}</span>$</button>
					<div style="display: flex; justify-content: center; align-items: center; margin-top: 30px">
						<buton class="btn-count" id="cons" data-action="cons">-</buton>
						<input type="number" step="1" min="1" max="100" value="1" id="quantity">
						<buton class="btn-count" id="pros" data-action="pros">+</buton>
					</div>
				</div>
			`

	ROOT_POPUP.addEventListener('click', handleCLick)

	function handleCLick (e) {
		const total = document.querySelector('#quantity')
		const target = e.target.dataset.action
		target === 'closeInfo' && ACTION[target](handleCLick)
		if (target === 'pros' || target === 'cons') ACTION[target](total.value, price)
		if (target === 'form' && total.value > 0) formRender( total, title, price, image, description)
	}

	checkPrice(price)
}

function formRender ( total, title, price, image) {
	ROOT_POPUP.innerHTML = `
		<div class="container-popup">
			<div class="header-popup">
				<div class="title">${title}</div>
				<div class="close" data-action="closeInfo">X</div>
			</div>
		
	<form id="order-form">
	
		<label>Full Name:
			<input type="text" id="full_name" name="full_name">
			<p>Incorrect full name (Luca Hopkins Jkoef)</p>
		</label>

		<label>
			City:
			<select id="city" name="city">
				<option value="">--Select City--</option>
				<option value="Kyiv">Kyiv</option>
				<option value="Kharkiv">Kharkiv</option>
				<option value="Lviv">Lviv</option>
				<option value="Odesa">Odesa</option>
				<option value="Dnipro">Dnipro</option>
			</select>
			<p>Please select a city.</p>
		</label>
		
		<label>Phone:
			<input type="text" id="phone" name="phone">
			<p>Incorrect phone number (+380 (63) 123-45-67)</p>
		</label>

		<label>Warehouse for delivery via Nova Poshta:
			<input type="text" id="warehouse" name="warehouse">
			<p>Required field</p>
		</label>

		<label>Cash on delivery or payment by bank card:
			<select id="payment_method" name="payment_method">
				<option value="">--Select payment method--</option>
				<option value="Cash on delivery">Cash on delivery</option>
				<option value="Bank card">Bank card</option>
			</select>
			<p>Please select</p>
		</label>

		<label style="flex: 1 1 150%;">Order comment:
			<textarea id="comment" name="comment" rows="3"></textarea>
		</label>

		<label>
			<buton class="btn-count" id="cons" data-action="cons">-</buton>
				<input type="number" step="1" min="1" max="100" value="${total.value}" id="quantity">
			<buton class="btn-count" id="pros" data-action="pros">+</buton>
			<p>Please > 1</p>
			<div class="btn-buy" style="cursor: auto">  <span id ="price">${price * total.value}</span>  $</div>
		</label>
		
		<label for="checkAgree" style="display: flex">
			<input type="checkbox" name="checkAgree" id="checkAgree" >
			<span>I agree to the processing of personal data </span>
			<p>*check*</p>
		</label>
		<button type="submit" class="btn-submit" data-action="btn-submit">Order</button>
		
		
	</form>
</div>
		</div>	
		
		`

	checkPrice(price)
	validateForm(title, price, image)
}


function checkPrice (price) {
	document.querySelector('#quantity').addEventListener('input', (e) => {
		const current = e.currentTarget
		let valueCount = current.value
		document.getElementById("price").textContent = (valueCount * price).toFixed(1).toString();

	})
}