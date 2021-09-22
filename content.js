//for contact:juzailofficial@gmail.com
//to be implemented
///the menifest should be changed to only run on edulab website


//this codeset work cohesively with the index.html file .user should implement the container div in the web index.html
var score=0;
///the below eventlistener detects  mouse click in the webpage but it is not implemented in the plugin

//document.addEventListener("click", function(event) {
  //var page = [event.pageX, event.pageY];
  //var client = [event.clientX, event.clientY];
  //console.log(page, client);
  //$(".action").text(page + " " + client);
//})



///the below code snippet is used to check whether the user has changed the active tabs or minimized the screen
//or if another computer app is opened in full screen
//eventlistener 1
document.addEventListener("visibilitychange", function() {
  $(".action").text("you changed webpage");
  console.log("you changed webpage");
  score+=100;
  console.log(score);
})

////the below eventlistener detects copying and pasting of users using keyboard(ctrl+c,ctrl+v,ctrl+x)
//eventlistener 2
document.addEventListener("keydown", function(event) {

  if (event.ctrlKey) {
    switch (event.key) {
      case "c": {
        console.log("you attempted copying");
        $(".action").text("you attempted copying");
        score+=100;
        console.log(score);
        break;
      };

    case "x": {
      console.log("you attempted copying");
      $(".action").text("you attempted copying");
      score+=100;
      console.log(score);
      break;
    };
    case "v": {
      console.log("you attempted pasting");
      $(".action").text("you attempted pasting");
      score+=100;
      console.log(score);
      break;
    };
    }
  }


})

////the below codesnippet prevent the user from opening right click context menu for copying and pasting
//eventlistener3
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  console.log("you attempted right click");
  $(".action").text("you attempted right click");
  score+=50;
  console.log(score);
})

////the below eventlistener identifty whether user has gone out of the box or not
//eventlistener4
document.querySelector(".container").addEventListener("mouseleave", function() {
  $(".action").text("you MOVED out of THE BOX");
  console.log("you moved out of the box");
  score+=100;
  console.log(score);

});
//eventlistener5
document.querySelector(".container").addEventListener("mouseenter", function() {
  $(".action").text("you MOVED into THE BOX");
  console.log("you moved into the box");

});
console.log(document.querySelector(".location").innerText)
