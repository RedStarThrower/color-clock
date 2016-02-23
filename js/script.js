var $ = function(sel) {
  return document.querySelector(sel)
}
var mainContainer = document.querySelector("#main-container")

//Containers

var clockContainer = document.querySelector("#clock-container")
var hexContainer = document.querySelector("#hex-container")

//Background Color

var overlayEl = $("#overlay") 
var backgroundColor = "#009A82"
overlayEl.style.background = backgroundColor

// Changing Colors

var red = backgroundColor[1] + backgroundColor[2]
var redRgb = parseInt(red, 16)

var green = backgroundColor[3] + backgroundColor[4]
var greenRgb = parseInt(green, 16)

var blue = backgroundColor[5] + backgroundColor[6]
var blueRgb = parseInt(blue, 16)

var displayHex = function(){
	if (redRgb < 245) {
		redRgb += 10
	}
	else {
		redRgb = 0
	}
	if (greenRgb < 245) {
		greenRgb +=  20
	}
	else {
		greenRgb = 0
	}
	if (blueRgb < 245) {
		blueRgb += 15
	}
	else {
		blueRgb = 0
	}
	var newBackgroundColor = "rgb(" + redRgb + ',' + greenRgb + ',' + blueRgb + ")"
	overlayEl.style.background = newBackgroundColor
	hexContainer.innerHTML = redRgb + ":" + greenRgb + ":" + blueRgb

}
//hexContainer.innerHTML = redRgb + ":" + greenRgb + ":" + blueRgb
var displayHexId = setInterval(displayHex, 1000)

// Ticking Clock

 var displayTime = function() {
	var date = new Date()
	var hours = date.getHours()	
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()

		var checkTime = function(i) {
			if (i < 10) {
			i = "0" + i
			}
		return i
		}

		minutes = checkTime(minutes)
		seconds = checkTime(seconds)


		clockContainer.innerHTML = hours + ":" + minutes + ":" + seconds

}

//clockContainer.innerHTML = "13:10:30"
var displayTimeId = setInterval(displayTime, 1000)

//Line

var line = document.querySelector("#line")
var lineStyle = window.getComputedStyle(line)
//console.log(lineStyle)
var lineWidth = parseInt(lineStyle.width)
//console.log(lineWidth)
line.width = lineWidth
//console.log(line.width)


var displayLine = function() {
		if (lineWidth < 227) {
			lineWidth += 3	
		}
		else {
			lineWidth = 0
		}

		line.width = lineWidth
		console.log(line.width) 

}
//var displayLineId = setInterval(displayLine, 1000)



		

		

