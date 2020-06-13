let target = document.querySelectorAll(".observer"),
    options = {threshold:.5},
    observer = new IntersectionObserver(
      function(e){
        e.forEach(
          function(e){
            if (e.isIntersecting){
              document.body.id = e.target.id+"-body";
            }
          }
        )
      },options
    );
target.forEach(function(e){
  observer.observe(e);
});