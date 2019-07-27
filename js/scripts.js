function comment(){
var name = document.getElementById("name").val;
var email = document.getElementById("mail");
var message = document.getElementById("info");
 console.log(name);
 document.getElementById("button").checked;

//  }
// //  if(name=="" || email=="" || message==""){
//      alert(name,email,message,required );
//  }
//  else
{
 alert("Thank you " + " ! " + " name:" + " your message recieved");
}
}

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
   $('.pp1').animate({opacity:1});
   $(".pp1").hover(function(){
   $(this).stop() .animate({opacity:.4},200);
   $('.p2').fadeIn();
   }, function(){
   $(this).stop().animate({opacity:1},500);
   $('.p2').fadeOut();   
    });


    $('.p3').hide();
   $('.pp1').animate({opacity:1});
   $(".pp1").hover(function(){
   $(this).stop() .animate({opacity:.4},200);
   $('.p3').fadeIn();
   }, function(){
   $(this).stop().animate({opacity:1},500);
   $('.p3').fadeOut();   
    });

    $('.p4').hide();
    $('.pp1').animate({opacity:1});
    $(".pp1").hover(function(){
    $(this).stop() .animate({opacity:.4},200);
    $('.p4').fadeIn();
    }, function(){
    $(this).stop().animate({opacity:1},500);
    $('.p4').fadeOut();   
     });
});
