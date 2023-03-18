function search (input, remove) {

	input.addEventListener('input', (e) => {
		const val = e.target.value.trim().toLowerCase()

		const listTitle = document.querySelectorAll('h3[data-searh="title"]')
		const listCard = document.querySelectorAll('.card')
		if (val !== '') {

			listTitle.forEach((el, i) => {
				if (el.innerText.toLowerCase().search(val) === -1) {
					listCard[i].classList.add('hide')
					listTitle[i].innerHTML = listTitle[i].innerText

				} else {
					listCard[i].classList.remove('hide')
					let str = listTitle[i].innerText
					let res = insertMark(str.toLowerCase(), listTitle[i].innerText.toLowerCase().search(val), val.length)
					listTitle[i].innerHTML = res

				}
			})
		} else {
			listCard.forEach((el, i) => {
				el.classList.remove('hide')
				listTitle[i].innerHTML = listTitle[i].innerText
			})
		}
	})
	remove.addEventListener('click', () => ACTION.remove(input))
}

function insertMark (string, pos, len) {
	return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len)
}
