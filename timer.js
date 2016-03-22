"use strict";
function counter() {
     let minutes;
     let seconds;
     let interval;
     let stopBoolean;
     let noRepeat;
     let $minutes = document.querySelector(".minutes");
     let $seconds = document.querySelector(".seconds");
     let $timer = document.querySelector("#timer");

     document.querySelector("#startTimer").addEventListener("click", start);
     document.querySelector("#stopTimer").addEventListener("click", stop);
     document.querySelector("#restartTimer").addEventListener("click", reset);

     function start() {
          if (!noRepeat) {
               if($minutes.value>=0 && $seconds.value>=0){
                    seconds = $seconds.value;
                    minutes = $minutes.value;  
                    $timer.style.borderBottomColor = "transparent";
               }else if($minutes.value<0 || $seconds.value<0){
                    alert("Wartości muszą być większe od 0")
                    $timer.style.borderBottomStyle = "solid";
                    $timer.style.borderBottomWidth = ".3em";
                    $timer.style.borderBottomColor = "red";
                    return;
               }else if($seconds.value>60){
                    alert("Sekundy nie mogą być większe od 60")
                    $timer.style.borderBottomStyle = "solid";
                    $timer.style.borderBottomWidth = ".3em";
                    $timer.style.borderBottomColor = "red";
                    return;
               };
               interval = setInterval(function() {
                    if (seconds == 0) {
                         if (minutes == 0) {
                              clearInterval(interval);
                              noRepeat = false;
                              return;
                         } else {
                              minutes--;
                              seconds = 60;
                         };
                    };
                    --seconds;

                    $minutes.value = minutes;
                    $seconds.value = seconds;
               }, 1000)
               noRepeat = true;
          };
     };

     function stop() {
          if (noRepeat === true) {
               noRepeat = false;
               clearInterval(interval);
          };
          stopBoolean = true;
     };

     function reset() {
          if (noRepeat === true || stopBoolean === true) {
               noRepeat = false;
               clearInterval(interval);
               minutes = 0;
               seconds = 0;
               $minutes.value = "2";
               $seconds.value = "0";
          };
     };
};
counter();
