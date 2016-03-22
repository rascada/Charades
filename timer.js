"use strict";

class Timer extends HTMLElement {
  createdCallback() {
    this.createShadowRoot()
      .innerHTML = `
        <style>
          #timer {
            width: 15em;
            height: 3em;
            border-bottom: .3em solid transparent;
          }
          .timerButton{
            background-color: pink;
            border: none;
            margin-left: .3em;
            outline: none;
            font-size: 1.3em;
          }
          #controls {
            width: 10.5em;
            height: 5em;
            margin: auto;
          }
          #restartTimer {
            margin-left: 10%;
            margin-top: 0.2em;
          }
          .counter {
            width: 1.3em;
            height: 1em;
            background-color: transparent;
            font-size: 3em;
            text-align: center;
            border: transparent;
            outline: none;
          }
        </style>

      	<div id="timer">
          	<input class="counter minutes" type="number" max="60" min="0" value="0">
          	<span id="separate">:</span>
        		<input class="counter seconds" type="number" max="60" min="0" value="0">
      	</div>

      	<div id="controls">
      		<button id="startTimer" class="timerButton">START</button>
      		<button id="stopTimer" class="timerButton">STOP </button>
      		<button id="restartTimer" class="timerButton">RESTARTUJ </button>
      	</div>
      `;


     //this.minutes;
     //this.seconds;
     //this.interval;
     //this.stopBoolean;
     //this.noRepeat;
     this.$minutes = this.shadowRoot.querySelector(".minutes");
     this.$seconds = this.shadowRoot.querySelector(".seconds");
     this.$timer = this.shadowRoot.querySelector("#timer");

     this.shadowRoot.querySelector("#startTimer").addEventListener("click", this.start.bind(this));
     this.shadowRoot.querySelector("#stopTimer").addEventListener("click", this.stop.bind(this));
     this.shadowRoot.querySelector("#restartTimer").addEventListener("click", this.reset.bind(this));
  }

  stop() {
       if (this.noRepeat === true) {
            this.noRepeat = false;
            clearInterval(this.interval);
       };
       this.stopBoolean = true;
  }

  reset() {
       if (this.noRepeat === true || this.stopBoolean === true) {
            this.noRepeat = false;
            clearInterval(this.interval);
            this.minutes = 0;
            this.seconds = 0;
            this.$minutes.value = "2";
            this.$seconds.value = "0";
       };
  }

  start() {
       if (!this.noRepeat) {
            if(this.$minutes.value>=0 && this.$seconds.value>=0){
                 this.seconds = this.$seconds.value;
                 this.minutes = this.$minutes.value;
                 this.$timer.style.borderBottomColor = "transparent";
            }else if(this.$minutes.value<0 || $seconds.value<0){
                 alert("Wartości muszą być większe od 0")
                 this.$timer.style.borderBottomStyle = "solid";
                 this.$timer.style.borderBottomWidth = ".3em";
                 this.$timer.style.borderBottomColor = "red";
                 return;
            }else if($seconds.value>60){
                 alert("Sekundy nie mogą być większe od 60")
                 this.$timer.style.borderBottomStyle = "solid";
                 this.$timer.style.borderBottomWidth = ".3em";
                 this.$timer.style.borderBottomColor = "red";
                 return;
            };
            this.interval = setInterval(() => {
                 if (this.seconds == 0) {
                      if (this.minutes == 0) {
                           clearInterval(this.interval);
                           this.noRepeat = false;
                           return;
                      } else {
                           this.minutes--;
                           this.seconds = 60;
                      };
                 };
                 --this.seconds;

                 this.$minutes.value = this.minutes;
                 this.$seconds.value = this.seconds;
            }, 1000)
            this.noRepeat = true;
       };
  }
}

document.registerElement('timer-kamila', Timer);
