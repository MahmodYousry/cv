$(function () {
  'use strict';
  
  //featured work
  $('.featured-work ul li').on('click', function () {
	  $(this).addClass('active').siblings().removeClass('active');
	  if ($(this).data('class') === 'all') {
		  $('.shuffle-imgs .col-md').css('opacity', 1);
	  } else {
		  $('.shuffle-imgs .col-md').css('opacity', '.08');
		  $($(this).data('class')).parent().css('opacity', 1);
	  }
  });


});




var index = 0;

function changeImage() {
  var imgElement = document.querySelector('#personal_image');
  let images = ['imgs/me2.jpg', 'imgs/me.jpg'];
  
	imgElement.parentElement.animate({ opacity: 0 }, 200);
	imgElement.parentElement.animate({ opacity: 1 }, 3000);

  imgElement.src = images[index]; // set the new image source

  index >= 1 ? index = 0 : index++; // increment index and reset to 0 if necessary
}

window.onload = function () {
	setInterval(changeImage, 4000);
};
