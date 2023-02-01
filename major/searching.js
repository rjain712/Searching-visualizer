var container = document.getElementById("array");

// Function to generate the array of blocks
function generateArray(noOfBars = 30) {
    // calling helper function to delete old bars from dom
    deleteChild();
	for (var i = 0; i < noOfBars; i++) {

        

		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block");

		// Adding style to div
		array_ele.style.height = `${value * 3}px`;
		// array_ele.style.width = `30px`;
		array_ele.style.transform = `translate(${i * 35}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}



//binary search

// Function to generate the array of blocks
function generatesortedArray(noOfBars = 30) {
    // calling helper function to delete old bars from dom
    deleteChild();

	// Creating an array
	var arr = [];
 
	// Filling array with random values
	for (var i = 0; i < noOfBars; i++) {
	  // Return a value from 1 to 100 (both inclusive)
	  var val = Number(Math.ceil(Math.random() * 100));
	  arr.push(val);
	}
   
	// Sorting Array in ascending order
	arr.sort(function (a, b) {
	  return a - b;
	});

	for (var i = 0; i < noOfBars; i++) {

        

		var value = arr[i];

		// Creating element div
		var array_ele = document.createElement("div");

		// Adding class 'block' to div
		array_ele.classList.add("block");

		// Adding style to div
		array_ele.style.height = `${value * 3}px`;
		// array_ele.style.width = `30px`;
		array_ele.style.transform = `translate(${i * 35}px)`;

		// Creating label element for displaying
		// size of particular block
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// Appending created elements to index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}


// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#array");
    bar.innerHTML = ' ';
    }




// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, delay);
		});
	});
}





// Selecting Size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event Listener to update the bars on UI when slider is used
arraySize.addEventListener('input',function(){
    console.log(arraySize.ariaValueMax, typeof(arraySize.value));
    generateArray(parseInt(arraySize.value));
	console.log(parseInt(arraySize.value))
});



// Use Async Function so we can do animation of Sorting
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('')},milisec);
    })
}

// default input for waitforme function 260ms
let delay =250;

// Select Speed Slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event Listener to update delay time
delayElement.addEventListener("input",function()
{
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
    console.log("delay=",delay);
});


// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".new-array");
newArray.addEventListener("click", function(){
console.log("From newArray " + arraySize.value);
console.log("From newArray " + delay);
// enableSortingBtn();
// enableSizeSlider();
generateArray(arraySize.value);
});

function disableButton() {
	document.querySelector("#linearSearch").disabled=true;
    document.querySelector("#binarySearch").disabled=true;


	document.querySelector("#arr_sz").disabled = true;

	document.querySelector(".new-array").disabled = true;
}

function enableButton() {
	document.querySelector("#linearSearch").disabled=false;
    document.querySelector("#binarySearch").disabled=false;
    
	document.querySelector("#arr_sz").disabled = false;

	document.querySelector(".new-array").disabled = false;
}




// Calling generateArray function
generateArray();

