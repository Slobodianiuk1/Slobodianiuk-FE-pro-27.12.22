const ACTION = {
	buy (title, image) {
		ROOT_POPUP.className = ''
		ROOT_BUY_INFO.innerHTML = `
			<div class="container-buy_info">
			<div style="display: flex">
				<div>Ви купили - ${title}</div>
				<div class="close" data-action="close" style="background: #fff; padding: 20px; color: #333333; border-radius: 5px;">X</div>
			</div>
			<img src="${image}" alt="${title}" width="150px">
 			
 			Покупака успешна! 🥳🤩
 		
			</div>
		`
	},
	close () {
		ROOT_POPUP.className = ''
		ROOT_BUY_INFO.innerHTML = ''
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
	}

}