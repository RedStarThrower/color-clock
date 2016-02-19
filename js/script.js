var mainContainer = document.querySelector("#main-container")

//Clock
var clockContainer = document.querySelector("#clock-container")

var clock = new Date ();
var timeString = clock.toTimeString()
var timeArr = timeString.split(" ")
var timeOnly = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    return arr[0]
  }
}
var time = timeOnly(timeArr)
clockContainer.innerHTML = time

//Hex Colors

var hexContainer = document.querySelector("#hex-container")
hexContainer.innerHTML = "13:75:27"

var clockState = {
  showing: true
}

var showHex = function() {
  if (clockState.showing) {
    clockContainer.style.opacity = 0
    hexContainer.style.opacity = 1
    clockState.showing = false
  }
  else {
    clockContainer.style.opacity = 1
    clockState.showing = true
  }
}

var hideHex = function() {
  if (clockState.showing === false) {
    clockContainer.style.opacity = 1
    hexContainer.style.opacity = 0
    clockState.showing = true
  }
  else {
    clockContainer.style.opacity = 0
    clockState.showing = false
  }
}

clockContainer.addEventListener("mouseover", showHex)
clockContainer.addEventListener("mouseout", hideHex)