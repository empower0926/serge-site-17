function readMore() {
  var expand = document.getElementById("read-sec-1");
  var btn = document.getElementById("read-more-btn");
  var oztg = document.getElementById("oztg-coin");

  if (expand.style.display === "none") {
    btn.innerText = "Read Less";
    expand.style.display = "block";
    expand.style.animationName = "read-more";
    expand.style.animationDuration = "1s";

    oztg.setAttribute("class", "d-none d-xl-block");
  } else {
    btn.innerText = "Read More";
    expand.style.animationName = "read-less";
    expand.style.animationDuration = "1s";
    expand.style.display = "none";

    oztg.setAttribute("class", "d-none");
  }
}

let opened = false;
function openChat() {
  let chat = document.getElementById('chat');
  chat.style.animationDuration = ".3s";
  chat.style.animationFillMode = "forwards";
  if (opened) {
    chat.style.animationName = "closeChat";
    opened = false;
  } else {
    chat.style.animationName = "openChat";
    opened = true;
  }
}

var dot = document.getElementsByClassName("dot");

var delay = 1;
var duration = 4;
for (i = 0; i < dot.length; i++) {
  var t = Math.floor(Math.random() * (98 - 1)) + 1;
  var l = Math.floor(Math.random() * (98 - 1)) + 1;

  dot[i].style.left = l + "%";
  dot[i].style.top = t + "%";

  dot[i].style.animation = "blink";
  dot[i].style.animationDuration = duration + "s";
  dot[i].style.animationIterationCount = "infinite";
  dot[i].style.animationDelay = delay + "s";
  delay += 1;
}

function changePan(text) {
  document.getElementById("oztcard").style.display = "none";
  document.getElementById("flashcryptostation").style.display = "none";
  document.getElementById("flashxchanger").style.display = "none";
  document.getElementById("flashWallet").style.display = "none";
  document.getElementById("adchain").style.display = "none";
 document.getElementById("corewallet").style.display = "none ";
//  document.getElementById("green-gold").style.display = "none ";
  let pan = document.getElementById(text);
  pan.style.display = "block";
  pan.style.animationName = "zoom-in";
  pan.style.animationDuration = ".3s";
  pan.style.animationTimingFunction = "ease-in-out";
  var x = window.matchMedia("(max-width: 1200px)");
  if (x.matches) {
    // If media query matches

    smoothscroll("#para");
  } else {
    smoothscroll("#sec-2");
  }
}

function smoothscroll(hash) {
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    800,
    function () {
      window.location.hash = hash;
    }
  );
}
function tclick(id) {
  smoothscroll('#tcdata');
  var tr = document.getElementById(id);
  var cells = tr.cells;

  for (var i = 0; i < 7; i++) {
    document.getElementById("tr" + i).style.backgroundColor = "";
  }
  tr.style.backgroundColor = "#f1b500";

  for (var i = 0; i < cells.length; i++) {
    var tcd = document.getElementById("tcd" + i);
    var mnroi = document.getElementById("mnroi");
    var tc = document.getElementById("tc" + i);
    if (cells[i].innerText != "") {
      if (i > 14) {
        mnroi.style.display = "block";
      } else {
        mnroi.style.display = "none";
      }
      tcd.style.display = "block";
      tc.innerHTML = cells[i].innerText;
    } else {
      tcd.style.display = "none";
      tc.innerHTML = "";
    }
  }



}
