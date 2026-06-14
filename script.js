function checkDisease() {
  let fever = document.getElementById("fever").checked;
  let cough = document.getElementById("cough").checked;
  let headache = document.getElementById("headache").checked;

  let result = "No disease detected";

  if (fever && cough) result = "Flu";
  else if (cough && headache) result = "Cold";
  else if (fever && headache) result = "Viral";

  document.getElementById("result").innerText = result;
}