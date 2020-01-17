$(function() {

  $("#main").css({ backgroundColor: "black" });
  $(function() {
    $("#video")
      .css({
        width: "100vw",
        height: "100vh",
        minWidth: "100vw",
        minHeight: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh"
      });
      // .css({
      //   width: $(window).innerWidth() + "px",
      //   height: $(window).innerHeight() + "px" }
      // );

        $(window).resize(function() {
          ("#video")
            .css({
              width: "100vw",
              height: "100vh",
              minWidth: "100vw",
              minHeight: "100vh",
              maxWidth: "100vw",
              maxHeight: "100vh"
            });
            // .css({
            //   width: $(window).innerWidth() + "px",
            //   height: $(window).innerHeight() + "px" }
            // );
    });
  });
});
