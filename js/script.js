
//Плавный переход к блоку=============================================
$("body").on("click","li a", function(e) {
	e.preventDefault();
	var id  = $(this).attr('href');
	var top = $(id).offset().top; // получаем координаты блока
	$('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});

// $("body").on('click', '[href="first-page__btn-body"]', function (e) {
// 	var fixed_offset = 100;
// 	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
// 	e.preventDefault();
// });


// $("document").on('click', '[href=".first-page__btn-body"]', function (e) {
// 	var fixed_offset = 100;
// 	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
// 	e.preventDefault();
// });
//======================================================================================


//Фоновая картинка в HTML (Чистый JS без JQ) ==========================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//=====================================================
//Меню бургер========================================
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});
//=====================================================


//Параллакс=======================================================
$(window).scroll(function(event) {
	var s=$(this).scrollTop()/2;
	$('.fullscreen__bg').css('transform','translate3d(0, '+s+'px, 0)');
});
//================================================================

//=========================================================