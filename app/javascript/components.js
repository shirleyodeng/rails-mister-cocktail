// function slideDown() {
//   var cocktails = document.getElementById("cocktails");
//   cocktails.slideToggle("slow");
// }

// var discoverArrow = document.getElementById("banner-arrow");
// discoverArrow.addEventListener("click", slideDown);


function mouseOver() {
  var cards = document.getElementById("cards");
  cards.addEventListener("mouseover", function( event ) {
    console.log(event.currentTarget);
  });
}

export { mouseOver }
