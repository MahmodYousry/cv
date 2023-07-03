$(function () {
  'use strict';
  //Adjust Slider Height
  var winH   = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH   = $('.navbar').innerHeight();
  $('.slider ,.carousel-item').height(winH - ( upperH + navH ));
  
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


let images = ['imgs/me.webp', 'imgs/me2.webp'];

let index = 0;
const imgElement = document.querySelector('#personal_image');

function changeImage() {
   imgElement.src = images[index];
   index >= 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(changeImage, 5000);
};
