function toggleDropdown() {
    const popupOverlay = document.getElementById('popupOverlay');
    var dropdown = document.getElementById("dropdown-id");
    var dropdownButton = document.querySelector('.dropbtn');
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        document.documentElement.scrollTop = 0; 
        document.body.scrollTop = 0; 
        dropdown.style.display = "block";
        dropdownButton.textContent = '\u2715'; 
        popupOverlay.style.display = 'flex'; 
        document.body.style.overflow = 'hidden'; 
        popupOverlay.style.display = 'block'; 
    setTimeout(() => {
        popupOverlay.style.right = '0'; 
    }, 50); 
    document.body.style.overflow = 'hidden'; 
    } else {
       // Closing dropdown
       dropdown.style.display = "none";
       dropdownButton.textContent = '\u2630'; // Change back to hamburger icon
       
       setTimeout(() => {
           popupOverlay.style.right = '-100%'; // Slide the overlay off to the right
       }, 50);
       
       setTimeout(() => {
           popupOverlay.style.display = 'none'; // Hide the overlay after sliding animation
           document.body.style.overflow = 'auto'; // Allow scrolling of background content
       }, 300); // Adjust timing to match CSS transition duration
   }
}



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


var close = document.getElementById("close");
var side_nav_mobile = (document.getElementsByClassName("side-nav-mobile"))[0]
var open = (document.getElementsByClassName("side-nav-more"))[0]

close.addEventListener('click', function() {
    close.style.display = 'none';
    side_nav_mobile.style.display = "none";
    console.log(1)
    open.style.display = "block";

});



open.addEventListener('click', function() {
    open.style.display = 'none';
    open.style.display = "none";
    console.log(1)
    side_nav_mobile.style.display = "block"
    side_nav_mobile.style.display = "flex"
    close.style.display = "block"

});
