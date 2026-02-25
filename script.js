const steps = document.querySelectorAll(".step");
const nxtButton = document.querySelectorAll(".next");
const prevButton = document.querySelectorAll(".prev");
const progress = document.getElementById("progress");

let currentStep = 0;

//show step
function updateStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  //calculate progress step
  const percent = ((currentStep + 1) / steps.length) * 100;
  progress.style.width = percent + "%";
}

//next button
nxtButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inputs = steps[currentStep].querySelectorAll("input");

    //validate
    for (let input of inputs) { 
      if (input.value.trim() === "") {
        alert("Please fill all the fields");
        return;
      }
    }
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStep();
    }
  });
});

prevButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateStep();
    }
  });
});


updateStep(); // initialize first step

