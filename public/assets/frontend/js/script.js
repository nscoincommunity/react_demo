"use strict";$(document).ready(function(){$(window).on('load',function(){$('#theme-loader').fadeOut('slow',function(){$(this).remove();});});var ost=0;$(window).scroll(function(){var cOst=$(this).scrollTop();if(cOst==0){$('.navbar').addClass('top-nav-collapse');}else if(cOst>ost){$('.navbar').addClass('top-nav-collapse').removeClass('default');}else{$('.navbar').addClass('default').removeClass('top-nav-collapse');}
ost=cOst;});function setHeight(){var $window=$(window);var windowHeight=$(window).innerHeight();if($window.width()>=320){$('#home').css('min-height',windowHeight);}else{$('#home').removeAttr('min-height',windowHeight);}};setHeight();$(window).resize(function(){setHeight();});$('body').scrollspy({target:".navbar",offset:50});$("#menubar a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},1500,function(){window.location.hash=hash;});}});var swiper=new Swiper('.screenshots-slider',{pagination:'.swiper-pagination',effect:'coverflow',grabCursor:true,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',initialSlide:2,centeredSlides:true,loop:true,spaceBetween:0,slidesPerView:5,coverflow:{rotate:-5,stretch:-60,depth:125,modifier:4,slideShadows:false,},breakpoints:{768:{slidesPerView:1,},1200:{slidesPerView:3}}});var swiper=new Swiper('.layout-1-screenshots-slider',{pagination:'.swiper-pagination',effect:'slides',grabCursor:true,nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',initialSlide:2,centeredSlides:true,loop:true,spaceBetween:40,slidesPerView:5,breakpoints:{768:{slidesPerView:1,},1200:{slidesPerView:3}}});var swiper=new Swiper('.layout-2-screenshots-slider',{nextButton:'.swiper-button-next',prevButton:'.swiper-button-prev',spaceBetween:0,loop:true,initialSlide:1,preloadImages:true,autoplayDisableOnInteraction:false,autoplay:false,effect:'coverflow',centeredSlides:true,slidesPerView:3,coverflow:{rotate:0,stretch:100,depth:100,modifier:1,slideShadows:false},breakpoints:{480:{slidesPerView:1,},768:{slidesPerView:2,},992:{slidesPerView:3,}}});$('.video-play').magnificPopup({type:'iframe',closeOnBgClick:false,iframe:{markup:'<div class="mfp-iframe-scaler">'+
'<div class="mfp-close"></div>'+
'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
'<div class="mfp-title">Some caption</div>'+
'</div>'},callbacks:{markupParse:function(template,values,item){values.title=item.el.attr('title');}},removalDelay:300,mainClass:'mfp-fade'});$('.counter').counterUp({delay:30,time:1000});$('.owl-carousel').owlCarousel({loop:true,margin:0,dotsEach:false,autoplay:true,stagePadding:0,autoplaySpeed:1000,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:1,nav:false},1000:{items:1.4,nav:false,loop:true}}})
$('.owl-carousel-watch-screenshots').owlCarousel({loop:true,margin:40,dotsEach:true,autoplay:true,stagePadding:0,autoplaySpeed:1000,responsiveClass:true,responsive:{0:{items:1,loop:true,nav:false},600:{items:3,loop:true,nav:false},1000:{items:5,loop:true,nav:false}}})
$('.layout-3-screenshots-slider').owlCarousel({loop:true,margin:100,dotsEach:true,autoplay:true,stagePadding:0,autoplaySpeed:1000,responsiveClass:true,responsive:{0:{items:1,loop:true,nav:false},600:{items:2,loop:true,nav:false},1200:{items:3,loop:true,nav:true}}})
$('.owl-carousel-feedback').owlCarousel({loop:true,margin:0,dotsEach:true,autoplay:true,stagePadding:0,autoplaySpeed:1000,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:1,nav:false},1000:{items:2,nav:false,loop:true}}})
$('.owl-carousel-blog').owlCarousel({loop:true,margin:20,dotsEach:true,autoplay:true,stagePadding:10,autoplaySpeed:1000,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:3,nav:false,loop:true}}})
$('.owl-carousel-client').owlCarousel({loop:true,margin:20,dotsEach:false,dots:false,autoplay:true,stagePadding:10,autoplaySpeed:1000,responsiveClass:true,responsive:{0:{items:1,nav:false},600:{items:3,nav:false},1000:{items:5,nav:false,loop:true},1200:{items:5,nav:true,loop:true},}})
$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');$(".owl-next").html('<i class="fa fa-chevron-right"></i>');var $screen=$("#screen"),$text=$("#text"),flag=false,duration=300;$screen.owlCarousel({items:1,autoplay:false,margin:10,nav:false,dots:false,}).on('changed.owl.carousel',function(e){if(!flag){flag=true;var a=e.property.value++;$(".owl-dot").removeClass("active");$('.owl-dot').eq(a).addClass("active");$text.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});$text.owlCarousel({margin:20,items:1,nav:false,autoplay:false,center:false,dots:true,}).on('click','.owl-item',function(){$screen.trigger('to.owl.carousel',[$(this).index(),duration,true]);}).on('changed.owl.carousel',function(e){if(!flag){flag=true;var a=e.property.value++;$(".owl-dot").removeClass("active");$('.owl-dot').eq(a).addClass("active");$screen.trigger('to.owl.carousel',[e.item.index,duration,true]);flag=false;}});Waves.init();Waves.attach('.flat-buttons',['waves-button']);Waves.attach('.float-buttons',['waves-button','waves-float']);Waves.attach('.float-button-light',['waves-button','waves-float','waves-light']);Waves.attach('.flat-icon',['waves-circle']);Waves.attach('.float-icon',['waves-circle','waves-float']);Waves.attach('.float-icon-light',['waves-circle','waves-float','waves-light']);Waves.attach('.flat-box',['waves-block']);Waves.attach('.float-box',['waves-block','waves-float']);Waves.attach('.waves-image');window.sr=ScrollReveal();sr.reveal('.vertical-phone, .home-mob-img, .mob-slide, .feature-watch, .img-watch-work-moke, .features-1-moke, .features-3-moke',{origin:'top',distance:'30px',duration:800,delay:400,opacity:1,scale:0,easing:'linear',reset:true})
sr.reveal('.image-animation',{duration:3900,origin:'right',},50);$(".btn-subscribe").on("click",function(e){var subscriber_email=$("input#subscriber_email").val();if(subscriber_email==""){$("input#subscriber_email").focus();return false;}else{var atpos=subscriber_email.indexOf("@");var dotpos=subscriber_email.lastIndexOf(".");if(atpos<1||dotpos<atpos+2||dotpos+2>=subscriber_email.length){alert("Not a valid e-mail address");return false;}}
var dataString='&subscriber_email='+subscriber_email;var form=$(this);var str=form.serialize();$.ajax({type:"POST",url:"mail/mailchimp.php",data:dataString,success:function(){alert('You are subscribe with our newsletter');$(".btn-subscribe").attr('disabled','true');}});});$(".btn-subscribe-footer").on("click",function(e){var subscriber_email=$("input#footer-email").val();if(subscriber_email==""){$("input#footer-email").focus();return false;}else{var atpos=subscriber_email.indexOf("@");var dotpos=subscriber_email.lastIndexOf(".");if(atpos<1||dotpos<atpos+2||dotpos+2>=subscriber_email.length){alert("Not a valid e-mail address");return false;}}
var dataString='&subscriber_email='+subscriber_email;var form=$(this);var str=form.serialize();$.ajax({type:"POST",url:"mail/mailchimp.php",data:dataString,success:function(){alert('You are subscribe with our newsletter');$(".btn-subscribe").attr('disabled','true');}});});$(".submit_contact").on("click",function(e){send_form();return false;});function send_form(){var first_name=$("input#first_name").val();if(first_name==""){$("input#first_name").focus();$("input#first_name").attr("placeholder","Name is must required..");return false;}
var email=$("input#contact_email").val();if(email==""){$("input#contact_email").focus();$("input#contact_email").attr("placeholder","Email address is must required");return false;}else{var atpos=email.indexOf("@");var dotpos=email.lastIndexOf(".");if(atpos<1||dotpos<atpos+2||dotpos+2>=email.length){alert("Not a valid e-mail address");$("input#contact_email").focus();$("input#contact_email").attr("placeholder","Please enter valid email address");return false;}}
var message=$("input#contact_message").val();if(message==""){$("input#contact_message").focus();$("input#contact_message").attr("placeholder","Message field is required");return false;}
var dataString='&Name='+first_name+'&email='+email+'&message='+message;var form=$(this);var str=form.serialize();$.ajax({type:"POST",url:"mail/mail.php",data:dataString,success:function(){alert('Thanks for your contact. Our team contact you soon as possible');$(".submit_contact").attr('disabled','true');}});}});$(window).scroll(function(){if($(this).scrollTop()>600){$('.scrollup').fadeIn();}else{$('.scrollup').fadeOut();}});$('.scrollup').click(function(){$("html, body").animate({scrollTop:0},600);return false;});(function(){$('<div class="color-picker"><a href="#" class="handle"><i class="fa fa-cog fa-spin"></i></a><div class="settings-header"><h3>Setting panel</h3></div><div class="section"><h4 class="color">Normal color schemes:</h4><div class="colors"><a href="#" class="color-1" ></a><a href="#" class="color-2" ></a><a href="#" class="color-3" ></a><a href="#" class="color-4" ></a><a href="#" class="color-5" ></a><a href="#" class="color-6" ></a><a href="#" class="color-7" ></a></div></div></div>').appendTo($('body'));})();$(".color-1").click(function(){$("#color").attr("href","assets/css/color/color-1.css");return false;});$(".color-2").click(function(){$("#color").attr("href","assets/css/color/color-2.css");return false;});$(".color-3").click(function(){$("#color").attr("href","assets/css/color/color-3.css");return false;});$(".color-4").click(function(){$("#color").attr("href","assets/css/color/color-4.css");return false;});$(".color-5").click(function(){$("#color").attr("href","assets/css/color/color-5.css");return false;});$(".color-6").click(function(){$("#color").attr("href","assets/css/color/color-6.css");return false;});$(".color-7").click(function(){$("#color").attr("href","assets/css/color/color-7.css");return false;});$('.color-picker').animate({right:'-239px'});$('.color-picker a.handle').click(function(e){e.preventDefault();var div=$('.color-picker');if(div.css('right')==='-239px'){$('.color-picker').animate({right:'0px'});}
else{$('.color-picker').animate({right:'-239px'});}});