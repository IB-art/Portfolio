$(function () {
	$('.certificados__box').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});


	const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

	smothScrollElems.forEach(link => {
		link.addEventListener('click', (event) => {

			event.preventDefault()
			const id = link.getAttribute('href').substring(1)

			document.getElementById(id).scrollIntoView({
				behavior: 'smooth'
			});


		})
	})

	$('.menu__list-link').on('click', function (e) {
    e.preventDefault();
  
    
    $('.menu__list-link').removeClass('menu__list-link--active');
    $(this).addClass('menu__list-link--active');
    
  });


		


});