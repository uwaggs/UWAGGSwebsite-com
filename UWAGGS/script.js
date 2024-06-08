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
  
