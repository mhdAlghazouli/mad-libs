const myBtn = document.getElementById("clickMe");
const nounOutput1 = document.getElementById("outputNoun");
const verbOutput1 = document.getElementById("outputVerb");
const nounOutput2 = document.getElementById("outputNoun2");
const nounInput1 = document.getElementById("noun1Input");
const verbInput1 = document.getElementById("verb1Input");
const nounInput2 = document.getElementById("noun2Input");

myBtn.addEventListener("click", event => {
  event.preventDefault();

  nounOutput1.innerHTML = nounInput1.value;
  nounOutput1.classList.add('filled');

  verbOutput1.innerHTML = verbInput1.value;
  verbOutput1.classList.add("filled");

  nounOutput2.innerHTML = nounInput2.value;
  nounOutput2.classList.add('filled');

});