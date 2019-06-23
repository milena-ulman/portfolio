const navigation = $(".navigation");
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  $("#nav-mobile").fadeToggle();
  $(".navigation-toggle").toggleClass("open");
  $("html").toggleClass("disable-scroll");
}

// Change navigation class if user scrolls down (make it brighter)
$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    navigation.addClass("navigation--bright");
  } else {
    navigation.removeClass("navigation--bright");
  }
});

// If user had mobile navigation open, close it on > XS size
$(window).resize(function() {
  const windowWidth = $(window).width();

  if (windowWidth > 576 && isMobileMenuOpen) {
    toggleMobileMenu();
  }
});

$(".navigation-toggle").on("click", function() {
  toggleMobileMenu();
});

$("#mu-about-link, #mu-skills-link, #mu-projects-link, #mu-contact-link").click(
  function() {
    toggleMobileMenu();
  }
);
