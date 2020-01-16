document.addEventListener('DOMContentLoaded' => {
  var scrollSpeed = 30;
  var current = 0;
  var direction = 'h';
  function bgscroll(){
      current -= 3;
      $('div.clouds').css("backgroundPosition", (direction == 'h') ? current+"px 0" : "0 " + current+"px");
  }
})
