// Joel McKay
// UI Structure
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set initial menu state
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.add("show");
    }

    //Reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("show");
    }
    //Reset menu state
    showMenu = false;
  }
}

$(document).ready(function() {
  $(".submit").click(function(event) {
    console.log("ClickedButton");

    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      //statusElm.append("<div>Email is valid </div>");
    } else {
      event.preventDefault();
      if (statusElm.length != 0) {
        statusElm.empty();
        console.log("empty");
      }
      statusElm.append("<div>*Email is not valid.</div>");
    }

    if (subject.length >= 3) {
      //statusElm.append("<div>Subject is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>*Subject is not valid.</div>");
    }

    if (message.length >= 10) {
      //statusElm.append("<div>Subject is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>*Message is not valid.</div>");
    }
  });
});
