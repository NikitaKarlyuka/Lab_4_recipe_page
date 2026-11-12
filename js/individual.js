const individualTips = [
  "Use fresh eggs at room temperature for a better texture.",
  "Add a little milk or water while beating the eggs to make the omelette softer.",
  "Cook on medium-low heat so the bottom does not burn.",
  "Warm the plate before serving so the omelette stays hot longer."
];

let individualTipIndex = 0;

const individualTipText = document.querySelector("#individual-tip-text");
const individualPrevBtn = document.querySelector("#individual-prev-tip");
const individualNextBtn = document.querySelector("#individual-next-tip");

function updateTipText() {
  const tipNumber = individualTipIndex + 1;
  individualTipText.textContent = `Tip ${tipNumber} of ${individualTips.length}: ${individualTips[individualTipIndex]}`;
}

function showNextTip() {
  individualTipIndex = individualTipIndex + 1;

  if (individualTipIndex >= individualTips.length) {
    individualTipIndex = 0;
  }

  updateTipText();
}

function showPrevTip() {
  individualTipIndex = individualTipIndex - 1;

  if (individualTipIndex < 0) {
    individualTipIndex = individualTips.length - 1;
  }

  updateTipText();
}

individualNextBtn.addEventListener("click", showNextTip);
individualPrevBtn.addEventListener("click", showPrevTip);

updateTipText();