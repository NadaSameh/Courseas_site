
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  items:3,
  nav: true,
  dots: false,
  center: true,
  responsiveClass:true,
  navText:["<i class='fa fa-chevron-left'></i>",
           "<i class='fa fa-chevron-right'></i>"],
  responsive:{
      0:{items:1},
      480:{items:1},
      768:{items:3},
      1200:{items:3}
  }
});

/*tween max workdetails */
var tween = new TimelineLite();
    tween.set(".content-one", {visibility:"visible" ,overflow:"hidden"})
    .from(".content-one .data", 2, { left:-200,  autoAlpha:0}, 1, "stagger") 
    .from(".content-one .img-content", 2, {right:-200,  autoAlpha:0}, 1, "stagger") ;
    tween.play(); 

 /*tween max workdetails */
 var tl = new TimelineLite();
    tl.set(".content2", {visibility:"visible",overflow:"hidden"})
    .from(".content2 .img-content", 2, { left:-200,  autoAlpha:0}, 1, "stagger") 
    .from(".content2 .data", 2, { right:-200,  autoAlpha:0}, 1, "stagger") ;
      tl.pause();

    $(document).ready(function(){
     var distance=$('.content-two').offset().top;
    $(window).scroll(function(){
     var dist_scroll=window.pageYOffset;
    if(dist_scroll > (distance - 300)){
      tl.play();
    }
    });
}); 
 /*tween max workdetails */
 var t2 = new TimelineLite();
    t2.set(".content-three", {visibility:"visible",overflow:"hidden"})
    .from(".content-three .img-content", 2, { right:-200,  autoAlpha:0}, 1, "stagger") 
    .from(".content-three .data", 2, { left:-200,  autoAlpha:0}, 1, "stagger") ;
      t2.pause();

    $(document).ready(function(){
     var distance=$('.content-three').offset().top;
    $(window).scroll(function(){
     var dist_scroll=window.pageYOffset;
    if(dist_scroll > (distance - 200)){
      t2.play();
    }
    });
});  

 /*tween max workdetails */
 var t3 = new TimelineLite();
    t3.set(".content-four", {visibility:"visible",overflow:"hidden"})
    .from(".content-four .img-content", 2, {left:-200 ,  autoAlpha:0}, 1, "stagger") 
    .from(".content-four .data", 2, { right:-200,  autoAlpha:0}, 1, "stagger") ;
      t3.pause();

    $(document).ready(function(){
     var distance=$('.content-four').offset().top;
    $(window).scroll(function(){
     var dist_scroll=window.pageYOffset;
    if(dist_scroll > (distance - 200)){
      t3.play();
    }
    });
}); 
 /*tween max workdetails */
 var t4 = new TimelineLite();
    t4.set(".slider-user", {visibility:"visible",overflow:"hidden"})
    .staggerFrom(".slider-user .show_client", 2, {scale:0,  autoAlpha:0}, 1, "stagger") ;
      t4.pause();

    $(document).ready(function(){
     var distance=$('.slider-user').offset().top;
    $(window).scroll(function(){
     var dist_scroll=window.pageYOffset;
    if(dist_scroll > (distance - 300)){
      t4.play();
    }
    });
}); 
/*tween max workdetails */
      var t6 = new TimelineLite();
           t6.set(".img-six", {visibility:"visible"})
           .from(".img-six img", 2, { scale:0,rotation:360,  autoAlpha:0}, 1, "stagger") ;
             t6.pause();
     
  $(document).ready(function(){
         var distance=$('.img-six').offset().top;
         $(window).scroll(function(){
            var dist_scroll=window.pageYOffset;
             if(dist_scroll > (distance - 700)){
             t6.play();
            }
          });
  });
  
 
 