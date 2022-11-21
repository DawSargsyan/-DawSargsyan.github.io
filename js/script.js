$(document).ready(function() {

    $('.navbar-nav').on("click" , ".link-menu" , function() {
        $('.link-menu.active').removeClass("active");
        $(this).addClass("active");
    })
    $('.nav-portfolio').on("click" , ".link-portfolio" , function() {
        $('.link-portfolio.active').removeClass("active");
        $(this).addClass("active");
    })
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 300) {
            $('.nav-1').addClass('white');
            $('.nav-1 a').addClass('color')
        }
        else {
        $('.nav-1').removeClass('white')
        $('.nav-1 a').removeClass('color')
        }
    })

    var btn = $('.back-to-top');
    $(window).on('scroll' , function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });



      $(window).scroll(function() {
        $(".section").each(function() {
            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() *0.7 ; 
            

            if (x >= y) {
                $(this).addClass('active')
            }
        })
    })

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.all').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

        if(value == "business")
        {
            $('.business').show('1000');
        }
        else
        {
            $(".business").not('.'+value).hide('3000');
            $('.business').filter('.'+value).show('3000');
            
        }

        if(value == "creative")
        {
            $('.creative').show('1000');
        }
        else
        {
            $(".creative").not('.'+value).hide('3000');
            $('.creative').filter('.'+value).show('3000');
            
        }

        if(value == "education")
        {
            $('.education').show('1000');
        }
        else
        {
            $(".education").not('.'+value).hide('3000');
            $('.education').filter('.'+value).show('3000');
            
        }

        if(value == "blog")
        {
            $('.blog').show('1000');
        }
        else
        {
            $(".blog").not('.'+value).hide('3000');
            $('.blog').filter('.'+value).show('3000');
            
        }

        if(value == "free")
        {
            $('.free').show('1000');
        }
        else
        {
            $(".free").not('.'+value).hide('3000');
            $('.free').filter('.'+value).show('3000');
            
        }


        
 
    	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		}
		    	$(this).addClass("active");
	});











    $(".form-group-float").on("focus" , ".form-control" ,  function() {
            $('.form-label.active').removeClass("active");
            $($(this).prev()).addClass("active");
        })

    $(".card-1").on("mouseenter" , function() {
            $(".slide-element1").css({
                "bottom" : "110px",
                "opacity" : "1" 
            })
        })    
    $(".card-1").on("mouseleave" ,  function() {
            $(".slide-element1").css({
                "bottom" : "83px",
                "opacity" : "0",
            })
        })
    
    $(".card-2").on("mouseenter" , function() {
            $(".slide-element2").css({
                "bottom" : "110px",
                "opacity" : "1" 
            })
        })    
    $(".card-2").on("mouseleave" ,  function() {
            $(".slide-element2").css({
                "bottom" : "83px",
                "opacity" : "0",
            })
        })

    $(".card-3").on("mouseenter" , function() {
            $(".slide-element3").css({
                "bottom" : "110px",
                "opacity" : "1" 
            })
        })    
    $(".card-3").on("mouseleave" ,  function() {
            $(".slide-element3").css({
                "bottom" : "83px",
                "opacity" : "0",
            })
        })
    
    $(".card-4").on("mouseenter" , function() {
            $(".slide-element4").css({
                "bottom" : "110px",
                "opacity" : "1" 
            })
        })    
    $(".card-4").on("mouseleave" ,  function() {
            $(".slide-element4").css({
                "bottom" : "83px",
                "opacity" : "0",
            })
        })
    
    $(window).scroll(function() {
            $(".footer-col").each(function() {
                var x = $(window).scrollTop() + $(window).height();
                var y = $(this).offset().top + $(this).height() *1 ; 
                
    
                if (x >= y) {
                    $(this).addClass('active');
                    
                    
                }
            })
        })
    var btn1 = $('.scroll-about');
   
    btn1.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 520}, '3s');
      });

      var btn2 = $('.scroll-portfolio');
      
      btn2.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop: 1050}, '3s');
        });

      var btn3 = $('.scroll-services');
     
      btn3.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop: 2050}, '3s');
        });

    var btn4 = $('.scroll-ourteam');
     
    btn4.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 2600}, '3s');
          });

    var btn5 = $('.scroll-contact');
     
    btn5.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 4700}, '3s');
        });
});

