projimgs = document.getElementsByClassName("projectimgs");
shuttle = document.getElementById("shuttle");
fakeconsole = document.getElementById("fakeconsole");
typecount = 0;
cursorbool = true;
projimgs[0].style.zIndex = 998;
projimgs[0].style.left = 100+"vw";
projimgs[1].style.left = -90+"vmin";

racket = document.getElementById("racket");
musicnote = document.getElementById("musicnote");

function onloadanimations() {
  $("#pfp").animate({
    width: 30 + 'vh', height: 30 + 'vh'
  }, 1000)
}

window.addEventListener("scroll", function() {
  if (pageYOffset > document.getElementById("textaboutbackground").offsetTop) {
    setTimeout(function() {
      $("#textaboutbackground").animate({
        width: 80 + 'vw', height: 80 + 'vh'
      }, 2000);
    }, 400)
  }
  if (pageYOffset > document.getElementById("languages").offsetTop + document.getElementById("languagehead").offsetTop - window.innerHeight) {
    $("#languagehead, #beginner, #expert").animate({
      opacity: 1
    }, 2000)
  }
  if (pageYOffset > document.getElementById("languages").offsetTop + document.getElementById("cpp").offsetTop - window.innerHeight) {
    setTimeout(function() {
      document.getElementById("cpp").classList.add("langrotate");
      $("#cpp").animate({
        left: 3 + 'vw'
      }, 400)
    }, 400)
    setTimeout(function() {
      document.getElementById("python").classList.add("langrotate");
      $("#python").animate({
        left: 3 + 'vw'
      }, 400)
    }, 1000)
    setTimeout(function() {
      document.getElementById("html").classList.add("langrotate");
      $("#html").animate({
        left: 3 + 'vw'
      }, 400)
    }, 1600)
    setTimeout(function() {
      document.getElementById("css").classList.add("langrotate");
      $("#css").animate({
        left: 3 + 'vw'
      }, 400)
    }, 2200)
    setTimeout(function() {
      document.getElementById("js").classList.add("langrotate");
      $("#js").animate({
        left: 3 + 'vw'
      }, 400)
    }, 2800)
    setTimeout(function() {
      document.getElementById("ahk").classList.add("langrotate");
      $("#ahk").animate({
        left: 3 + 'vw'
      }, 400)
    }, 3400)
    setTimeout(function() {
      document.getElementById("jquery").classList.add("langrotate");
      $("#jquery").animate({
        left: 3 + 'vw'
      }, 400)
    }, 4000)
    setTimeout(function() {
      document.getElementById("babylon").classList.add("langrotate");
      $("#babylon").animate({
        left: 3 + 'vw'
      }, 400)
    }, 4600)
    setTimeout(function() {
      document.getElementById("socket").classList.add("langrotate");
      $("#socket").animate({
        left: 3 + 'vw'
      }, 400)
    }, 5200)
    setTimeout(function() {
      document.getElementById("react").classList.add("langrotate");
      $("#react").animate({
        left: 3 + 'vw'
      }, 400)
    }, 5800)
    setTimeout(function() {
      progbars = document.querySelectorAll(".langprogress");
      for (i = 0; i < progbars.length; i++) {
        progbars[i].classList.add("langproganimating")
      }
    }, 6400)
  }
  if (pageYOffset > document.getElementById("break3").offsetTop - window.innerHeight) {
    $("#projectshead").animate({
      opacity: 1
    }, 2000)
    projimgs[0].style.transition = "left 3s, opacity 3s";
    projimgs[0].style.left = "calc(50vw - 45vmin)";
    projimgs[0].style.opacity = 1;
    projimgs[1].style.transition = "left 3s, opacity 3s";
    projimgs[1].style.left = "calc(50vw - 45vmin)";
    projimgs[1].style.opacity = 1;
    setTimeout(function() {
      projimgs[0].style.transition = "none";
      projimgs[1].style.transition = "none";
    }, 3000)
    for (i=2;i<projimgs.length;i++) {
      $(".projectimgs").eq(i).animate({
        opacity: 1
      }, 2000);
    }
    $("#demobtn").animate({
      opacity: 1
    }, 2000);
    $("#codebtn").animate({
      opacity: 1
    }, 2000);
  }
  if (pageYOffset > document.getElementById("break4").offsetTop - window.innerHeight) {
    document.getElementById("hobbytitle").classList.add("animatehobbytitle");
  }
  if (pageYOffset > document.getElementById("break4").offsetTop+document.getElementById("jspianofork").offsetTop-window.innerHeight) {
    $("#jspianofork").animate({
      left: 10+'vw'
    }, 4000);
  }
  if (pageYOffset > document.getElementById("break4").offsetTop+document.getElementById("chesspiece").offsetTop-window.innerHeight) {
    $("#chesspiece").animate({
      left: 15+'vw'
    }, 4000);
  }
  if (pageYOffset > document.getElementById("break4").offsetTop+musicnote.offsetTop-window.innerHeight) {
    musicnote.classList.add("animatenote");
    setTimeout(function() {
      musicnote.classList.remove("animatenote");
      musicnote.style.left = "calc(50vw - 10vmin)";
      musicnote.style.opacity = 1;
      musicnote.classList.add("pumpnote");
    }, 2000);
  }
  if (pageYOffset > document.getElementById("break4").offsetTop+fakeconsole.offsetTop-window.innerHeight) {
    codeconsole();
  }
})

function scrolldown1() {
  $("html").animate({
    scrollTop: $("#break1").offset().top
  }, 2000)
}

demoLinks = ["moistplayerwithupload.pzrepl.repl.co", "socketio.pzrepl.repl.co", "fruitslicer.pzrepl.repl.co", "physicsfps1.pzrepl.repl.co", "survivio.pzrepl.repl.co", "54.151.94.81", "babylonface3d.pzrepl.repl.co/basketball/", "babylonface3d.pzrepl.repl.co/physicsgun/", "babylonface3d.pzrepl.repl.co/physics/", "babylonface3d.pzrepl.repl.co/game", "lemonade.pzrepl.repl.co", "phpsurvey.pzrepl.repl.co", "clock.pzrepl.repl.co", "journey.pzrepl.repl.co", "ball-move.pzrepl.repl.co/play", "starship.pzrepl.repl.co", "trexrunner.tk", "whackamole.tk"];

codeLinks = ["MoistPlayerUpload", "chatroom1", "fruitslicerReact", "PhysicsFPS1", "surviv.io", "physicsgungame2", "basketballphysics", "physicsgungame1", "physicsplayground", "FPSWorld1", "lemonade", "phpsurvey", "clock", "platformer", "surviv.ml", "spaceinvaders", "dinogame", "whackamole"];
x = document.getElementsByClassName("projectimgs").length;
y = 0;
z = null;
projimgs = document.getElementsByClassName("projectimgs");
function rotateprojects(clicked) {
  if (clicked == "rotateproj2") {
    y++;
    if (y>(x-1)) {
      y=0;
      for (i=0;i<projimgs.length;i++) {
        projimgs[i].style.zIndex = -1;
      }
      projimgs[y].classList.add("movetopprojimg");
    } else {
      projimgs[y].classList.add("movetopprojimg");
    }
    setTimeout(function() {
      projimgs[y].style.zIndex = 999;
      projimgs[y].classList.remove("movetopprojimg");
    }, 3000);
  } else {    
    projimgs[y].classList.add("movebottomprojimg");
    if (y==0) {
      y=x-1;
      z = 0;
    } else {
      y--;
      z=y+1;
    }
    projimgs[z].style.zIndex = 1000;
    setTimeout(function() {
      projimgs[z].style.zIndex = -1;
      projimgs[z].classList.remove("movebottomprojimg");
    }, 3000);
  }
  document.getElementById("demoLink").href = "http://"+demoLinks[y];
  document.getElementById("codeLink").href = "https://github.com/patrickzhou1234/"+codeLinks[y];
}

setTimeout(function() {
  document.getElementById("racket1").style.animation = "racket1 2s linear infinite";
}, 500)

document.getElementById("valorant").onclick = function() {
  navigator.clipboard.writeText("moistnugget #2264");
  Swal.fire({
    title: 'Done!',
    text: 'You copied my valorant ID (moistnugget #2264).',
    icon: 'success',
    background: 'black',
    color: 'white'
  })
}

function linkspotify() {
  Swal.fire({
    title: 'Spotify',
    text: 'Username: Patrick Z',
    imageUrl: 'https://i.imgur.com/WxuzFcW.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Custom image',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    background: "black",
    color: "white",
    confirmButtonText:
    'Visit!',
    confirmButtonAriaLabel: 'Visit my spotify',
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://open.spotify.com/user/4yjee9wsgz68sav1b0imzd6u5", '_blank').focus();
    }
  })
}

blinkcount = 0;

function codeconsole() {
  content = "document.getElementById('console').style.backgroundColor='black';";
    consolerender = ">|";
    typewriter = setInterval(function() {
      if (typecount<content.length) {
        consolerender = consolerender.slice(0,-1);
        consolerender+=content[typecount]+"|";
        fakeconsole.innerHTML=consolerender;
        typecount++;
      } else {
        clearInterval(typewriter);
        consolerender = consolerender.slice(0, -1);
        consolerender+="\n";
        consolerender+=">";
        consolerender+="|";
        fakeconsole.style.backgroundColor = "black";
        fakeconsole.style.color="white";
        blinkint = setInterval(function() {
          blinkcount++;
          if (cursorbool) {
            consolerender = consolerender.slice(0, -1);
            cursorbool = false;
          } else {
            if (blinkcount==10) {
              typecount = 0;
              content = "document.getElementById('console').style.fontSize = 1+'vw';";
              typewriter2 = setInterval(function() {
                if (typecount<content.length) {
                  consolerender = consolerender.slice(0,-1);
                  consolerender+=content[typecount]+"|";
                  fakeconsole.innerHTML=consolerender;
                  typecount++;
                } else {
                  clearInterval(typewriter2);
                  consolerender = consolerender.slice(0, -1);
                  consolerender+="\n";
                  consolerender+=">";
                  consolerender+="|";
                  fakeconsole.style.fontSize = 1+'vw';
                }
              }, 50)
              clearInterval(blinkint);
            }
            consolerender+="|";
            cursorbool = true;
          }
          fakeconsole.innerHTML=consolerender;
        }, 500);
      }
    }, 50);
}