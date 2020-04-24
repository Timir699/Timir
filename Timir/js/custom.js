$(document).ready(function(){
   $navOffset=$('#header').offset().top;
            
    // navOffset ends 
        $top_offset=300;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },800);
        });
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#header").addClass('navfixed');
            }else{
                $("#header").removeClass('navfixed');
            }
        // navOffset ends
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }
        });
    
 $('.my-portfolio').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow:'.slidPrv',
  nextArrow:'.slidNext',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

   $('.venobox').venobox(); 

   $('.box').backgroundMove({
  movementStrength:'50'});

   $('.nav-link').click(function(){
        $('.nav-link').removeClass('collapse navbar-collapse nav-item active');
        $(this).addClass('collapse navbar-collapse nav-item active');

      });
   var typed = new Typed('.typing', {
    strings: ["Creative Frontend Developer.","Web Designer."],
    loop:true,

   typeSpeed: 80,
   backSpeed: 50,
   backDelay: 1000,
  });

      new WOW().init();
      

   
});