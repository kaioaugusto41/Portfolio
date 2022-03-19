
/* Table of content
--------------------------------------------

========

--------
LOADER
ANIMATION ON PAGE LOAD
ANIMATION ON PAGE SCROLL
SONGS PROGRESS ANIMATION
NAVIGATION CONTENT HOVER EFFECT
NAVIGATION CONENT
SONGS PLAYER
CUSTOM CURSOR
CIRLE EFFECT
SLIDER ON SONGS PAGE
-----------
==========

*/


// LOADER
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };
  
    Pace.on('done', function() {
        gsap.to('.p',1,{
          opacity:0,
          y:'-15%',
          stagger:-.1,
        })
  
    gsap.to('#preloader',1.5,{
        y:'-100%',
        ease:'Expo.easeInOut',
        delay:1,
        onComplete: function() {

            //ALL THE ANIMATIONS THAT WILL TAKE PLACE AFTER THE PAGE IS LOADED


            $('.text').each(function(){
                $(this).delay(1200).addClass('reveal')
            })
            $('.img').each(function(){
                $(this).delay(1200).addClass('reveal')
            })



            if(document.querySelector('#index-two') || document.querySelector('#index-one')){
                gsap.to('.new-release',0,{opacity:1})
                $('.new-release').delay(2000).addClass('opacity');
            }



            if(document.querySelector('.fade-in') ){
                gsap.to('.fade-in',1,{delay:1,opacity:1,stagger:.4})
            }


            if(document.querySelector('.opacity-contact')){

                gsap.to('.opacity-contact',1,{delay:1,opacity:1,stagger:.4})

            } 



                $('.menu-bar-line').delay(2000).addClass('opacity');


              



//ALL THE ANIMATIONS THAT WILL TAKE PLACE WHILE SCROLLING


    $(function () {
        var elements = $(".text-scroll, .img-scroll").toArray();
        $(window).scroll(function () {
            elements.forEach(function (item) {
                if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight) {
                    $(item).addClass("reveal");
                }
            });
        });
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - window.innerHeight ) {
                $(item).addClass("reveal");
            }
        });
    });
        //animation for songs page
        if(document.querySelector('.fade-up') ){
            gsap.to('.fade-up',1,{opacity:1,y:0,delay:1,stagger:.1})
        }

        if(document.querySelector('.music-indicator') ){
            gsap.to('.music-indicator',1,{opacity:1,delay:1})
        }
        if(document.querySelector('.scale')){
            gsap.to('.scale',1,{opacity:1,delay:1,scale:1,stagger:.2})
        }

          }
    })
   });






   // SCROLL PROGRESS ANIMATION

   $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
  });



//NAVIGATION CONTENT HOVER EFFECT 
  $(function(){

 TweenMax.set(".project-preview", { width: 0 });

  $('.navigation-content ul li a').on('mouseover',function(){
      gsap.to('.project-preview',1,{width:'200px',ease: Expo.easeInOut})
  })


  $('.navigation-content ul li a').on('mouseout',function(){
    gsap.to('.project-preview',1,{width:'0px',ease: Expo.easeInOut})
})


$(".navigation-content ul li a").hover(function(e) {
    var img = e.currentTarget.dataset.img;

    $(".project-preview").css({ "background-image": `url(${img}) `});
 
  });
  

    var $img = $('.project-preview');
      function cursormover(e){
       gsap.to( $img, {
         x : e.clientX,
         y : e.clientY,
        })
      }
      $('.navigation-content').on('mousemove',cursormover);
  })

   




  




  
 





