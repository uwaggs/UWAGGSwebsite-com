function toggleDropdown() {
    var exists = document.getElementsByClassName("dropdown-items");
    var dropdown = document.getElementById("dropdown-id");
    var computedStyle = window.getComputedStyle(dropdown);
    var displayPropertyValue = computedStyle.getPropertyValue("display");
    console.log(exists.length)
    if (displayPropertyValue == "none") {
        dropdown.style.display = "block";
       
    } else {
        var dropdown = document.getElementById("dropdown-id");
        dropdown.style.display = "none";
    }
  }
  
var dropdownBtn = document.querySelector('.clickable');



function toggleDropdown2() {
    // var exists = document.getElementsByClassName("dropdown-items");
    var dropdownContent = document.getElementById("drop");
    var computedStyle = window.getComputedStyle(dropdownContent);
    var displayPropertyValue = computedStyle.getPropertyValue("display");
    // console.log(exists.length)
    if (displayPropertyValue == "none") {
        dropdownContent.style.display = "flex";
       
    } else {
        var dropdown = document.getElementById("dropdown-id");
        dropdownContent.style.display = "none";
    }
  }

