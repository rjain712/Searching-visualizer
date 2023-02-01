

function BinarySearch() {
  if (confirm("The precondition for binary search is that the array should be sorted. If the data is not sorted, we may or may not get correct result.So apply binary search only on sorted array.")) {
    
    console.log("In Binary Search");
    const generatorInstance = BinarySearch();

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

    

    function start() {
        // do not start interval if there is already an interval
        // running
        console.log("in start");

        console.log("delay=", delay);

        let delaytime;
        if (delay > 200) {
            delaytime = delay + 250;
        }
        else {
            delaytime = delay + 100;
        }
        if (state.timeoutId === 0) {
            state.timeoutId = setInterval(() => nextStep(), delaytime)
        }
        console.log("startdone ");

        // await stop();
    }

    // clear timeout to stop auto porgress
    function stopitinsert() {
        console.log("in stop");
        clearTimeout(state.timeoutId);
        state.timeoutId = 0;
        console.log("stopdone ");

    }

    // tick further one step
    //   const stepForward = () => nextStep()


    
        //generateSortedArray();

        async function BinarySearch(delay = 300) {
          
          //generatesortedArray();
            var blocks = document.querySelectorAll(".block");
            var output = document.getElementById("text");
           
            //Extracting the value of the element to be searched
            var num = document.getElementById("fname").value;
           
            //Colouring all the blocks violet
            for (var i = 0; i < blocks.length; i += 1) {
              blocks[i].style.backgroundColor = "#6b5b95";
            }
           
            output.innerText = "";
           
            // BinarySearch Algorithm
           
            var start = 0;
            var end = blocks.length-1;
            var flag = 0;
            while (start <= end) {
              //Middle index
              var mid = Math.floor((start + end) / 2);
              blocks[mid].style.backgroundColor = "#FF4949";
           
              //Value at mid index
              var value = Number(blocks[mid].childNodes[0].innerHTML);
           
              // To wait for .1 sec
              await new Promise((resolve) =>
                setTimeout(() => {
                  resolve();
                }, delay)
              );
           
              //Current element is equal to the element
              //entered by the user
              if (value == num) {
                output.innerText = "Element Found";
                blocks[mid].style.backgroundColor = "#13CE66";
                flag = 1;
                break;
              }
              //Current element is greater than the element
              //entered by the user
              if (value > num) {
                end = mid - 1;
                blocks[mid].style.backgroundColor = "#6b5b95";
              } else {
                start = mid + 1;
                blocks[mid].style.backgroundColor = "#6b5b95";
              }
            }
            if (flag === 0) {
              output.innerText = "Element Not Found";
            }

            
          }
          
          //generatesortedArray();


        const play = document.querySelector("#play-btn");
        play.addEventListener("click", function () {
            console.log("play bubble sort");

            start();
        });

        const pause = document.querySelector("#pause-btn");
        pause.addEventListener("click", function () {
            console.log("play bubble sort");

            stopitinsert();
        });

    

    start();

}
}
