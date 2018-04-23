// products carousel
$('.main-carousel').flickity({

  cellAlign: 'left',
  contain: true
});

// enables smooth scrolling on all (internal) links
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    }
  });
});

// validating email address
function validateForm() {
    var x = document.forms["subscribeForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
      } else {
        alert("Thanks for subscribing!");
    }
}
