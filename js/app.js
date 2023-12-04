$(document).ready(function(){
    // preloader
    $(window).on('load',function(){
        $('.preloader').addClass('complete');
    });

    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{
        strings: ["Jitendra","a Developer", "a Designer", "a Freelancer"],
        smartBackspace:true,
        typeSpeed:100,
        backspeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    function onClickMenu(){
        document.getElementById("navbarId").classList.toggle("icon")
        document.getElementById("nav").classList.toggle("change")
    }

    //progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            var p = document.querySelectorAll(".progress-bar");
            p[0].setAttribute("style","width:90%;transition:1s all");
            p[1].setAttribute("style","width:80%;transition:1.5s all");
            p[2].setAttribute("style","width:85%;transition:1.7s all");
            p[3].setAttribute("style","width:70%;transition:2s all");
            p[4].setAttribute("style","width:75%;transition:2.3s all");
            p[5].setAttribute("style","width:65%;transition:2.5s all");      
        },
        offset:'90%'
      });

      

      //owl carousel
      $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        items:1
      });

      var filterized = $('.filter-container').filterizer({
        animationDuration:.5,
      });


});

