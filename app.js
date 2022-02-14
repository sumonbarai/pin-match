// pin generator
function pinGenerator() {
    let number = Math.round(Math.random() * 10000);
    number = number + "";
    if (number.length == 4) {
        return number;
    } else {
        return pinGenerator();
    }
}

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
    const pin = pinGenerator();
    const displayInput = document.getElementById("displayInput");
    displayInput.value = pin;
});

// submit section

const allBtn = document.getElementById("allBtn");
allBtn.addEventListener("click", function (event) {
    const ownBtn = event.target.innerText;

    if (ownBtn == "C") {
        submitDisplay.value = "";
    }else if(ownBtn == "<") {
        const submitDisplay = document.getElementById("submitDisplay");
        const sumSting = submitDisplay.value;
        const removeLast = sumSting.slice(0,-1);
        submitDisplay.value = removeLast;
    }else if(ownBtn == "Submit") {
        const submitDisplay = document.getElementById("submitDisplay");
        const displayInput = document.getElementById("displayInput");
        const errorMessage = document.getElementById("error-message");
        const successMessage = document.getElementById("success-message");
        if(submitDisplay.value == displayInput.value) {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            submitDisplay.value="";
            displayInput.value="";
        }else{
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
        }
       
    }else {
        const submitDisplay = document.getElementById("submitDisplay");
        const sumSting = submitDisplay.value + ownBtn;
        submitDisplay.value = sumSting;
    }
});