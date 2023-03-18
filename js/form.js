function validateForm (title, price, image) {
	const formContainer = document.querySelector('.container-popup')
	const form = document.getElementById('order-form')
	const fullName = form.full_name
	const city = form.city
	const warehouse = form.warehouse
	const paymentMethod = form.payment_method
	const comment = form.comment
	const quantity = form.quantity
	const checkAgree = form.checkAgree
	const phone = form.phone


	const submitBtn = document.querySelector('.btn-submit')


	const inputs = [{
		name: 'fullName',
		inputEl: fullName,
		validationsRules: [isFullName],
		needToValidate: true,
		isValidate: false,
		errorEl: fullName.parentElement.querySelector('p')
	}, {
		name: 'city',
		inputEl: city,
		validationsRules: [isSelect],
		needToValidate: true,
		isValidate: false,
		errorEl: city.parentElement.querySelector('p')
	}, {
		name: 'phone',
		inputEl: phone,
		validationsRules: [checkNumber],
		needToValidate: true,
		isValidate: false,
		errorEl: phone.parentElement.querySelector('p')
	}, {
		name: 'warehouse',
		inputEl: warehouse,
		validationsRules: [validateForValue],
		needToValidate: true,
		isValidate: false,
		errorEl: warehouse.parentElement.querySelector('p')
	}, {
		name: 'paymentMethod',
		inputEl: paymentMethod,
		validationsRules: [isSelect],
		needToValidate: true,
		isValidate: false,
		errorEl: paymentMethod.parentElement.querySelector('p')
	}, {
		name: 'comment',
		inputEl: comment,
		validationsRules: [],
		needToValidate: false,
		isValidate: null,
		errorEl: comment.parentElement.querySelector('p')
	}, {
		name: 'quantity',
		inputEl: quantity,
		validationsRules: [isTotal],
		needToValidate: true,
		isValidate: null,
		errorEl: quantity.parentElement.querySelector('p')
	}, {
		name: 'checkAgree',
		inputEl: checkAgree,
		validationsRules: [isCheck],
		needToValidate: true,
		isValidate: null,
		errorEl: checkAgree.parentElement.querySelector('p')
	}

	]


	submitBtn.addEventListener('click', (e) => {
		e.preventDefault()

		const validatableInputs = inputs.filter(obj => obj.needToValidate);

		const validateArr = validatableInputs.map(obj => {
			if (obj.needToValidate) {
				const isAllValid = obj.validationsRules.map((func) => {
					return func(obj.name === 'checkAgree' ? obj.inputEl.checked : obj.inputEl.value, obj.errorEl)
				})
				return isAllValid.every(el => el === true)
			}
		})

		if (validateArr.every(el => el === true)) {
			const data = {}
			inputs.forEach((obj) => {
				data[obj.name] = obj.inputEl.value
			})
			showOrder(data);
			sendData(data);
			return data
		} else {
			console.log('error')
		}


	})

	function sendData (data) {
		console.log(data)
	}

	function showOrder (data) {
		ROOT_POPUP.innerHTML = `
			<div class="container-popup">
						<div class="header-popup">
							<div class="title">My order</div>
							<div class="close" data-action="closeInfo">X</div>
						</div>
      					<div class="popup-content" style="display: flex; justify-content: space-between; width: 100%; flex-wrap: wrap"> 
      						<div style="flex: 50%">
        						<p>Customer Name: ${data.fullName}</p>
        						<p>Order Number: ${(Math.random() * 1000000).toFixed(0)}</p>
        						<p>Nova Poshta: ${data.warehouse}</p>
        						<p>Phone number: ${data.phone}</p>
        						<p>City: ${data.city}</p>
        						<p>Cash on delivery or payment by bank card: ${data.paymentMethod}</p>
        						
        					</div>
        					<div style="flex: 50%">
        						<p>Item: ${title}</p>
        						<img src="${image}" alt="${title}" width="150px">
							</div>
							<div style="flex: 100%">
								<p class="price">Price: ${price * quantity.value} $</p>
        						<p class="total">Total: ${quantity.value}</p>
							</div>
      					</div>
			</div>
		`
	}

	function isFullName (value, errorEl) {
		const isValid = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/.test(value)

		errorEl.classList[isValid ? 'remove' : 'add']('show')
		return isValid
	}

	function validateForValue (value, errorEl) {
		const isValid = value.trim().length > 5
		errorEl.classList[isValid ? 'remove' : 'add']('show')
		return isValid
	}

	function isSelect (value, errorEl) {
		const isValid = !!value
		errorEl.classList[isValid ? 'remove' : 'add']('show')
		return isValid
	}

	function isTotal (value, errorEl) {
		const isValid = value >= 1
		errorEl.classList[isValid ? 'remove' : 'add']('show')
		return isValid
	}

	function isCheck (value, errorEl) {
		errorEl.classList[value ? 'remove' : 'add']('show')
		return value
	}

	function checkNumber (value, errorEl) {
		value = value.replace(/[\s\-]/g, '');
		const isValid = value.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null
		errorEl.classList[isValid ? 'remove' : 'add']('show')
		return isValid;
	}
}





