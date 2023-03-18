const ACTION = {
 closeInfo (handleCLick) {
		ROOT_POPUP.className = ''
		ROOT_POPUP.removeEventListener("click", handleCLick);
	},
	remove (input) {
		input.value = ''
		if (input.value === '') {
			const listCard = document.querySelectorAll('.card')
			listCard.forEach((el) => {
				el.classList.remove('hide')
			})
		}
		const listTitle = document.querySelectorAll('h3[data-searh="title"]')
		listTitle.forEach((el) => {
			el.innerHTML = el.innerText
			el.classList.remove('hide')
		})
	},
	pros (count, price) {
		ACTION.count = ++count;
		ACTION.updateTotal(count, price);

	},

	cons (count, price) {
		if (count > 1) {
			count--;
			ACTION.updateTotal(count, price);
		}
	},

	updateTotal (count, price) {
		document.getElementById("price").textContent = (count * price).toFixed(1).toString();
		document.getElementById("quantity").value = count;
	}

}