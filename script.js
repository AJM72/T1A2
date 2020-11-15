// Dom manipulation of the Navbar/Hamburger menu. 

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// drops menu when hamburger clicked

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})