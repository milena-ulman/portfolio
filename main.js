const navigation = $(".navigation");

$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    navigation.addClass("navigation--bright");
  } else {
    navigation.removeClass("navigation--bright");
  }
});
