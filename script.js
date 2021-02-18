
$(document).ready(function(){
$(".main__menu li ul").hide();

$(".main__menu li:has('.submenu')").hover(
    function() {
        // $(this).addClass("active");
        $(this).find('ul').slideDown();
    },
    function() {
        // $(this).removeClass("active");        
        $(this).find('ul').slideUp('fast');
    }
//   function(){
//   $(".main__menu li ul").stop().fadeToggle(300);}
);

});



// $(document).ready(function () {
//     $('.flexslider').flexslider({
//         animation: 'fade',
//         controlsContainer: '.flexslider'
//     });
// });



