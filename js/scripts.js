var name = document.getElementById("mail");
var email = document.getElementById("name");
var message = document.getElementById("info");
 console.log(name);
 document.getElementById("button")





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

    $('#w1').hide();
    $('# p1').animate({opacity:1});
    $(".p1").hover(function(){
         $(this).stop() .animate({opacity:.4},200);
        $('#w1').fadeIn();
    }, function(){
        $(this).stop()
         .animate({opacity:1},500);
        $('#w1').fadeOut();
    });
});