const mainBtns = document.querySelectorAll('.main_btn')
mainBtns.forEach(el => {
	el.addEventListener('click', function(){
		if(!this.classList.contains('main_btn__active')){
			document.querySelector('.main_btn__active').classList.remove('main_btn__active')
			this.classList.add('main_btn__active')
		}
	})
})