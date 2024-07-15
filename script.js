const btnSubmit = document.querySelector("#btnSubmit");
// const btnAdd = document.querySelector("#add");
const btnResume = document.querySelector("#resume");
const btnPause = document.querySelector("#pause");


btnSubmit.addEventListener("click", start);
btnResume.addEventListener("click", resumeTimer);
btnPause.addEventListener("click", pauseTimer);

// btnAdd.addEventListener("click", (e)=> {
//     e.preventDefault();
//     const labels = document.querySelectorAll(".hidden");
//     labels.forEach(label => {
//         label.classList.add("visible");      
//     })
//     btnAdd.classList.add("hidden");
//     const header = document.querySelector(".hiddenHeader");
//     header.classList.add("visible");
// });


function start(e){
    e.preventDefault();
    const userMinutes = Number(document.querySelector("#inputMinutes").value);
    const userSeconds = Number(document.querySelector("#inputSeconds").value);

    let amountTime = (userMinutes * 60) + userSeconds;
    

    let timerID = setInterval(function calculateTime(){
        const countdown = document.querySelector("#countdown");
        const countdownMessage = document.querySelector("#countdownMessage");

        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        countdown.textContent = `${formattedMinutes} : ${formattedSeconds}`; 
        if (!paused){
            amountTime--;
        }
        if (amountTime < 0){
            amountTime = 0;
            clearInterval(timerID);
            playSound();
        }
  
    }, 1000);
    // calculateRestTime();
}
function playSound(){
    const audio = new Audio("https://cdn.glitch.global/ee7e677f-dc84-4ca4-9ee1-d9474a587729/sound.mp3?v=1699645843165");
    audio.play();
}



// function stopRestTimer(){
//     clearInterval(timerRestID)
// }

// function calculateRestTime(){
//     const countdownRest = document.querySelector("#countdownRest");
//     const restMinutes = Number(document.querySelector("#restMinutes").value);
//     const restSeconds = Number(document.querySelector("#restSeconds").value);

//     let amountRestTime = (restMinutes * 60) + restSeconds;

//     let restMin = Math.floor(amountRestTime / 60);
//     let restSec = amountRestTime % 60;

//     if (restMin < 10){
//         restMin = "0" + restMin;
//     }
//     if (restSec < 10){
//         restSec = "0" + restSec;
//     }
//     countdownRest.textContent = `${restMin} : ${restSec}` 
//     amountRestTime--;

//     if (amountRestTime < 0){
//         amountRestTime = 0;
//         stopRestTimer();
//         location.reload();
//     }
// }





let paused = false;
function resumeTimer(){
    paused = false;
}
function pauseTimer(){
    paused = true;
}

animation()
function animation() {
    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 400,
            "density": {
              "enable": true,
              "value_area": 750
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
      
}