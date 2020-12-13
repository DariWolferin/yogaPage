(function headerHello() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());
/*setTimeout(() => headerHello, 1000);

setTimeout(() => { headerHello();
	}, 18000);*/

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for(let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

		let animItemPoint = window.innerHeight - animItemHeight / animStart;
		if (animItemHeight > window.innerHeight) {
			 animItemPoint = window.innerHeight - window.innerHeight / animStart;
		}

		if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
			animItem.classList.add('_active');
		} else {
			if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
		   }
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

setTimeout(() => {
		animOnScroll();
	}, 300);
}

(() => {
      window.onload = () => {
        let header__burger = document.querySelector('.menu__icon');
        let header__menu = document.querySelector('.header__body');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e)=> {
          header__burger.classList.toggle('_active');
          header__menu.classList.toggle('_active');
          body.classList.toggle('lock');
        })
      }
    })();

const itemSitemap = document.querySelectorAll('.accordeon');
const itemSitemapBlock = document.querySelector('.accordeon__block');
console.log(itemSitemap)

	for(item of itemSitemap){
		item.addEventListener('click', function(){
			this.classList.toggle('_active');
		})
	}


