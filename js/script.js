$(document).ready(function () {
  $(".sidebar1 .li1").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items1").stop().show(500);
    } else {
      $(".sidebar2-items1").stop().hide();
    }
  });
  $(".sidebar1 .li2").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items2").stop().show(500);
    } else {
      $(".sidebar2-items2").stop().hide();
    }
  });
  $(".sidebar1 .li3").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items3").stop().show(500);
    } else {
      $(".sidebar2-items3").stop().hide();
    }
  });
  $(".sidebar1 .li4").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items4").stop().show(500);
    } else {
      $(".sidebar2-items4").stop().hide();
    }
  });
  $(".sidebar1 .li5").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items5").stop().show(500);
    } else {
      $(".sidebar2-items5").stop().hide();
    }
  });
  $(".sidebar1 .li6").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items6").stop().show(500);
    } else {
      $(".sidebar2-items6").stop().hide();
    }
  });
  $(".sidebar1 .li7").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items7").stop().show(500);
    } else {
      $(".sidebar2-items7").stop().hide();
    }
  });
  $(".sidebar1 .li8").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items8").stop().show(500);
    } else {
      $(".sidebar2-items8").stop().hide();
    }
  });
  $(".sidebar1 .li9").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items9").stop().show(500);
    } else {
      $(".sidebar2-items9").stop().hide();
    }
  });
  $(".sidebar1 .li10").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items10").stop().show(500);
    } else {
      $(".sidebar2-items10").stop().hide();
    }
  });
  $(".sidebar1 .li11").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items11").stop().show(500);
    } else {
      $(".sidebar2-items11").stop().hide();
    }
  });
  $(".sidebar1 .li12").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".sidebar2-items12").stop().show(500);
    } else {
      $(".sidebar2-items12").stop().hide();
    }
  });
});

//slider

let slideIndex = 0;

showSlides();
function showSlides() {
  var i;

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

///mega menu
$(document).ready(function () {
  $("nav .li1").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $("nav .li1 .shop").stop().slideDown(1000);
      $("nav .li1 .box").stop().addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $("nav .li1 .box").stop().fadeIn(2000);
      $("nav .li1 i").stop().addClass("rotate");
    } else {
      $("nav .li1 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $("nav .li1 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $("nav .li2").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $("nav .li2 .shop").stop().slideDown(1000);
      $("nav .li2 .box").addClass("animated");
      $(" .shadow").addClass("overlay").stop().fadeIn(2000);
      $("nav .li2 i").stop().addClass("rotate");
      $("nav .li2 .box").slideUp(3000).stop();
    } else {
      $("nav .li2 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $("nav .li2 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $("nav .li3").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $("nav .li3 .shop").stop().slideDown(1000);
      $("nav .li3 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $("nav .li3 i").stop().addClass("rotate");
      $("nav .li3 .box").slideUp(3000).stop();
    } else {
      $("nav .li3 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $("nav .li3 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(" nav  .li4").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(" nav .li4 .shop").stop().slideDown(1000);
      $(" nav .li4 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(" nav .li4 i").stop().addClass("rotate");
      $(" nav .li4 .box").slideUp(3000).stop();
    } else {
      $(" nav .li4 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(" nav .li4 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $("nav .li5").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $("nav .li5 .shop").stop().slideDown(1000);
      $("nav .li5 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $("nav .li5 i").stop().addClass("rotate");
      $("nav .li5 .box").slideUp(3000).stop();
    } else {
      $("nav .li5 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $("nav .li5 i").removeClass("rotate");
    }
  });
});
