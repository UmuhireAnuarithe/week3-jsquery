
$(document).ready(function(){
    $("#create,#path").click(function(){
     $(".hide").toggle();
     $("#path").toggle();
    });

    $("#dev,#see").click(function(){
     $(".hidden").toggle();
     $("#see").toggle();
    });

    $("#produce,#get").click(function(){
    $(".hidding").toggle();
    $("#get").toggle();
     });

   $('.p1').hide();
   $('.pp1').animate({opacity:1});
   $(".pp1").hover(function(){
   $(this).stop() .animate({opacity:.4},200);
   $('.p1').fadeIn();
   }, function(){
   $(this).stop().animate({opacity:1},500);
   $('.p1').fadeOut();   
    });

    $('.p2').hide();
   $('.pp2').animate({opacity:1});
   $(".pp2").hover(function(){
   $(this).stop() .animate({opacity:.4},200);
   $('.p2').fadeIn();
   }, function(){
   $(this).stop().animate({opacity:1},500);
   $('.p2').fadeOut();   
    });


    $('.p3').hide();
   $('.pp3').animate({opacity:1});
   $(".pp3").hover(function(){
   $(this).stop() .animate({opacity:.4},200);
   $('.p3').fadeIn();
   }, function(){
   $(this).stop().animate({opacity:1},500);
   $('.p3').fadeOut();   
    });

    $('.p4').hide();
    $('.pp8').animate({opacity:1});
    $(".pp8").hover(function(){
    $(this).stop() .animate({opacity:.4},200);
    $('.p4').fadeIn();
    }, function(){
    $(this).stop().animate({opacity:1},500);
    $('.p4').fadeOut();   
     });

    $('.work1').hide();
    $('.pp4').animate({opacity:1});
    $(".pp4").hover(function(){
    $(this).stop() .animate({opacity:.4},200);
    $('.work1').fadeIn();
    }, function(){
    $(this).stop().animate({opacity:1},500);
    $('.work1').fadeOut();   
     });

     $('.work2').hide();
    $('.pp5').animate({opacity:1});
    $(".pp5").hover(function(){
    $(this).stop() .animate({opacity:.4},200);
    $('.work2').fadeIn();
    }, function(){
    $(this).stop().animate({opacity:1},500);
    $('.work2').fadeOut();   
     });

     $('.work3').hide();
    $('.pp6').animate({opacity:1});
    $(".pp6").hover(function(){
    $(this).stop() .animate({opacity:.4},200);
    $('.work3').fadeIn();
    }, function(){
    $(this).stop().animate({opacity:1},500);
    $('.work3').fadeOut();   
     });

     $('.work4').hide();
    $('.pp7').animate({opacity:1});
    $(".pp7").hover(function(){
    $(this).stop() .animate({opacity:.4},200);
    $('.work4').fadeIn();
    }, function(){
    $(this).stop().animate({opacity:1},500);
    $('.work4').fadeOut();   
     });

     $("#button").click(function () {
        var names = $("#user").val();
        var email = $("#mail").val();
        var message = $("#info").val();
        if ((names === "") || (email === "") || (message === "")) {
            alert("Please, fill the form! before you submit");
        }
        else {
            alert( "Hi " + names + ", we have received your message. Thank you to communicate!");
        }

    });

});

