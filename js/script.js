$('.counter').counterUp({
  delay: 10,
  time: 1000
});
    



$('.latest_slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  // dots:false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  // arrows:true,
  // dots:false,
  nextArrow: ".next",
  prevArrow: ".prev",
  centerPadding:"0px",
  centerMode:true,
});



   
$('.slickslideimg').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding:"0px",
  centerMode:true,
});





    $(".search_btn i").click(function(){
       $(".inputbox").toggleClass("bg")
    })



    $('.banner_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        nextArrow: ".left",
        prevArrow: ".right",
      });

      var mixer = mixitup('.mixer');

   


    

   // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d ";
  document.getElementById("demo2").innerHTML = hours + "h ";
  document.getElementById("demo3").innerHTML = minutes + "m ";
  document.getElementById("demo4").innerHTML = seconds + "s ";

   // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);   






