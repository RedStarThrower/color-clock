var $ = function(sel) {
  return document.querySelector(sel)
}
var mainContainer = document.querySelector("#main-container")

//Clock

var clockContainer = document.querySelector("#clock-container")

var clock = new Date ();
var timeString = clock.toTimeString()
var timeArr = timeString.split(" ")
var time = timeArr[0]

clockContainer.innerHTML = time


//Hex Colors

var overlayEl = $("#overlay") 
var backgroundColor = "#a43e78"
overlayEl.style.background = backgroundColor
var backgroundNums = backgroundColor[1] + backgroundColor[2] + ":" + backgroundColor[3] + backgroundColor[4]+ ":" + backgroundColor[5] + backgroundColor[6]

var hexContainer = document.querySelector("#hex-container")
hexContainer.innerHTML = backgroundNums
