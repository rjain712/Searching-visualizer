
async function LinearSearch()
{
    const generatorInstance = LinearSearch();

// tick generator and perform update of the indicator
// tick generator and perform update of the indicator
const nextStep = () => {
	const { value } = generatorInstance.next();
	document.getElementsByClassName(".block").innerHTML = value;
  }


// state to keep track of the setInterval id
const state = {
	timeoutId: 0,
  }
  
function start () {
	// do not start interval if there is already an interval
	// running
	console.log("in start");

	console.log("delay=",delay);

	let delaytime;
	if(delay>200)
	{
		delaytime=delay+250;
	}
	else{
		delaytime=delay+100;
	}
	if (state.timeoutId === 0) {
		state.timeoutId =setInterval(() => nextStep(), delaytime)
	}
	console.log("startdone ");

	// await stop();
  }
  
  // clear timeout to stop auto porgress
  function stopit  ()  { 
	  console.log("in stop");
	clearTimeout(state.timeoutId);
	state.timeoutId = 0;
	console.log("stopdone ");

  }
  
  // tick further one step
//   const stepForward = () => nextStep()





async function LinearSearch(delay = 300) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

//Extracting the value entered by the user
var num = document.getElementById("fname").value;

//Changing the color of all the blocks to violet
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#6b5b95";
}

output.innerText = "";

var flag = 0;
// LinearSearch Algorithm
for (var i = 0; i < blocks.length; i += 1) {
	//Changing the color of current block to red
	blocks[i].style.backgroundColor = "#FF4949";

	// To wait for .1 sec

	await waitforme(delay);
	//await new Promise((resolve) =>
	//setTimeout(() => {
	//	resolve();
	//}, delay)
	//);

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);

	// To compare block value with entered value
	if (value == num) {
	flag = 1;
	//yield blocks = document.querySelectorAll(".block");
	output.innerText = "Element Found";
	
	blocks[i].style.backgroundColor = "#13CE66";
	
	break;
	} else {
	// Changing the color to the previous one
	//yield blocks = document.querySelectorAll(".block");
	blocks[i].style.backgroundColor = "#6b5b95";
	}
}
//When element is not found in the array
if (flag == 0) {
	output.innerText = "Element Not Found";
}
}

// Calling generatearray function
//generateArray();

start();



const play = document.querySelector("#play-btn");
play.addEventListener("click", function(){
console.log("play linear search");

start();
});

const pause = document.querySelector("#pause-btn");
pause.addEventListener("click", function(){
console.log("play linear search");

stopit();
});

}

const bubSortbtn = document.querySelector("#linearSearch");
bubSortbtn.addEventListener('click', async function(){
    disableButton();
    await LinearSearch();
   enableButton();
});