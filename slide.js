let offset = 0;
const slider = document.querySelector('.tovars');

document.querySelector('.slide_svg').addEventListener('click', function(){
	offset = offset + 281;
	if (offset > 1124) {
		offset = 0;
	}
	slider.style.left = -offset + 'px'
});