function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none") {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
}

function checkWindowSize() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  if (window.innerWidth > 1240) {
      dropdownMenu.style.display = 'none';
  }
}

// Call checkWindowSize function on window resize
window.addEventListener('resize', checkWindowSize);