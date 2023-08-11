$(function () {
	const $nav = $('header>nav>ul>li');

	//상단메뉴
	$nav.on('click', function (evt) {
		evt.preventDefault();

		const nowIdx = $nav.index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.main_img').animate({ left: -100 * nowIdx + '%' }, 1000, 'easeInOutQuint');
	});

	// 앞뒤 버튼
	let nowIdx = 0;
	const slides = function () {
		$nav.eq(nowIdx).addClass('on').siblings().removeClass('on');
		$('.main_img').animate({ left: -100 * nowIdx + '%' }, 1000, 'easeInOutQuint');
	};

	// 이전
	$('.prev > a').on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 5;
		}
		slides();
	});

	// 다음
	$('.next > a').on('click', function (evt) {
		evt.preventDefault();

		if (nowIdx < 5) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}
		slides();
	});
});
