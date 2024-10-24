

// 메인슬라이더
const swiper = new Swiper('.main_slider', {
  // direction: 'vertical',  슬라이더의 height를 고정
  loop: true,
    autoplay: {
      delay:2000,
      pauseOnMouseEnter:true
    },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   //dynamicBullets: true,
  //   //type: "fraction",
  //   clickable: true,
  // },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



