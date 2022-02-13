function updateCaseNumber(caseNum) {
  const caseInput = document.getElementById("case-number");
  let caseNumber = caseInput.value;
  if (caseNum == "case-plus") {
    caseNumber = parseFloat(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseFloat(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = caseNumber * 59;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case-plus");
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case-minus");
});
