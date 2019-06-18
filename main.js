const navigation = $(".navigation");

$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    navigation.addClass("navigation--dark");
  } else {
    navigation.removeClass("navigation--dark");
  }
});
