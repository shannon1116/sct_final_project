let checkboxes = document.getElementsByClassName('checkbox');
let radioButtons = document.getElementsByName('fav_pokemon');
let dropMenu = document.getElementsByName('types')[0];
let errorText = document.getElementById('errorText');
let errorFname = document.getElementById('errorFname');
let errorLname = document.getElementById('errorLname');
let errorEmail = document.getElementById('errorEmail');
let errorRadio = document.getElementById('errorRadio');
let errorCheckbox = document.getElementById('errorCheckbox');
let errorDropdown = document.getElementById('errorDropdown');

function checkboxesChecked() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    return false;
}

function hasCheckedOption() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return true;
        }
    }
    return false;
}

function isSelected() {
    if (dropMenu.value === "default") {
        return false;
    }
    return true; 
}

function validateForm() {
    let fnameVal = document.forms["surveyForm"]["fname"].value;
    let lnameVal = document.forms["surveyForm"]["lname"].value;
    let emailVal = document.forms["surveyForm"]["email"].value;

    errorText.textContent = "";
    errorFname.textContent = "";
    errorLname.textContent = "";
    errorEmail.textContent = "";
    errorRadio.textContent = "";
    errorCheckbox.textContent = "";
    errorDropdown.textContent = "";

    let valid = true;

    if (!fnameVal) {
        errorFname.textContent = "First name is required!";
        valid = false;
    }
    if (!lnameVal) {
        errorLname.textContent = "Last name is required!";
        valid = false;
    }
    if (!emailVal) {
        errorEmail.textContent = "Email is required!";
        valid = false;
    }
    if (!checkboxesChecked()) {
        errorCheckbox.textContent = "Please select at least one Pokemon game!";
        valid = false;
    }
    if (!hasCheckedOption()) {
        errorRadio.textContent = "Please select a Pokemon!";
        valid = false;
    }
    if (!isSelected()) {
        errorDropdown.textContent = "Please select a Pokemon Type!";
        valid = false;
    }
    return valid;
}

function activitiesReset() {
    if (!checkboxesChecked()) {
        errorCheckbox.textContent = "";
    }
    if (!hasCheckedOption()) {
        errorRadio.textContent = "";
    }
    if (!isSelected()) {
        errorDropdown.textContent = "";
    }
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', activitiesReset);
}

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', activitiesReset);
}

document.getElementById('surveyForm').onsubmit = function() {
    return validateForm();
}