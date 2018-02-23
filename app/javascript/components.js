function slideDown() {
  var cocktails = document.getElementById("cocktails");
  cocktails.slideToggle("slow");
}

var discoverArrow = document.getElementById("banner-arrow");
discoverArrow.addEventListener("click", slideDown);

export { slideDown }
