

let slideIndex = 1;   //index av bilden i slideshow till 1
showSlides(slideIndex);

// Next/previous knapaprna -1 om man klickar 
//på prev 1 om man klickar på next som läggs till på slideindex
function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}      // om n blir mer än 4 så börjar den om  på 1 igen
  if (n < 1) {slideIndex = slides.length}      // om n blir mindre än 1 så bör  4
  for (i = 0; i < slides.length; i++) {         // går igenom alla slides och gör sått inga utav bilderna syns
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";  //gör display style av sliden så att endast den nuvarande bilden syns
                                                  //detta gör det synligt
                                                  
                                          
 
}