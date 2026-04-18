function validateForm() {

let isValid = true;

let meal = document.getElementById("meal").value;
if (meal === "") {
document.getElementById("mealErr").innerHTML = "Please choose a meal type..";
isValid = false;
} else {
document.getElementById("mealErr").innerHTML = "";
}

let habits = document.getElementsByName("fh");
let habitSelected = false;

for (let i = 0; i < habits.length; i++) {
if (habits[i].checked) {
habitSelected = true;
}
}

if (!habitSelected) {
document.getElementById("habitErr").innerHTML = "Select at least one healthy habit..";
isValid = false;
} else {
document.getElementById("habitErr").innerHTML = "";
}

let eat = document.getElementsByName("eat");
let eatSel = false;

for (let i = 0; i < eat.length; i++) {
if (eat[i].checked) {
eatSel = true;
}
}

if (!eatSel) {
document.getElementById("freqErr").innerHTML = "Select how often you eat healthy meals..";
isValid = false;
} else {
document.getElementById("freqErr").innerHTML = "";
}

if (isValid) {
document.getElementById("message").innerHTML = "Form submitted successfully!!!";
} else {
document.getElementById("message").innerHTML = "";
}

return isValid;
}