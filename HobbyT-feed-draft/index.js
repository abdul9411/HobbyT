$(".star-1").click(function() {
  $(".star-1").addClass("checked");
  $(".star-2").removeClass("checked");
  $(".star-3").removeClass("checked");
  $(".star-4").removeClass("checked");
  $(".star-5").removeClass("checked");
});

$(".star-2").click(function() {
  $(".star-1").addClass("checked");
  $(".star-2").addClass("checked");
  $(".star-3").removeClass("checked");
  $(".star-4").removeClass("checked");
  $(".star-5").removeClass("checked");
});

$(".star-3").click(function() {
  $(".star-1").addClass("checked");
  $(".star-2").addClass("checked");
  $(".star-3").addClass("checked");
  $(".star-4").removeClass("checked");
  $(".star-5").removeClass("checked");
});

$(".star-4").click(function() {
  $(".star-1").addClass("checked");
  $(".star-2").addClass("checked");
  $(".star-3").addClass("checked");
  $(".star-4").addClass("checked");
  $(".star-5").removeClass("checked");
});

$(".star-5").click(function() {
  $(".star-1").addClass("checked");
  $(".star-2").addClass("checked");
  $(".star-3").addClass("checked");
  $(".star-4").addClass("checked");
  $(".star-5").addClass("checked");
});

// alert("length");
$(".post-area").keyup(function(){
var message = $("#postarena").val();
var length= message.length;
$(".wordcount").text(300-length+" words left");
});

$(".post-btn").click(function(){
var message = $("#postarena").val();
var length= message.length;
if (length===0){
alert("no text to post");
}
else{
  alert("Post Succesful!");
}
});

$(".comment-btn").click(function(){
$(".comment-area").slideUp().toggle();
});
