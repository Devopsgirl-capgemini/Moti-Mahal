// JavaScript Document
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});
 
/*TEAM SLIDER*/
jQuery('#teamslider').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        autoplay:true,
        dots:true,
        navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1,
                center:true
            },
            600:{
                items:2,
                center:true
            },
            1000:{
                items:3
            }
        }
});


new WOW().init();

 // Back to top
$(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
	  $('#back-to-top').tooltip('hide');

$(window).scroll(function(){

        if ($(window).scrollTop() >= 300) {
           $('body').addClass('sn_fixhdr');
            

        }
        else {
           $('body').removeClass('sn_fixhdr');
            
        }
    });

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.infoblock h3');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.infobody').not($next).slideUp().parent().removeClass('open');
        };
    }   

    var accordion = new Accordion($('#accordion'), false);
});