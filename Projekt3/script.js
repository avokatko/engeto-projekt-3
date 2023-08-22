const image1 = document.querySelector(".image1")
const image2 = document.querySelector(".image2")
const image3 = document.querySelector(".image3")
const button = document.querySelector(".signupbtn")

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "scale(1.1)"
})
image1.addEventListener("mouseleave", () => {
  image1.style.transform = "scale(1)"
})

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "scale(1.1)"
})
image2.addEventListener("mouseleave", () => {
  image2.style.transform = "scale(1)"
})

image3.addEventListener("mouseenter", () => {
  image3.style.transform = "scale(1.1)"
})
image3.addEventListener("mouseleave", () => {
  image3.style.transform = "scale(1)"
})

button.addEventListener("mouseenter", () => {
  button.style.transform = "translateY(-3px)"
})
button.addEventListener("mouseleave", () => {
  button.style.transform = "scale(1)"
})

const password1 = document.querySelector(".password1")
const password2 = document.querySelector(".password2")
const paragraphText = document.querySelector(".result-text")

password1.addEventListener("input", () => {
  const password1Value = password1.value
  const password2Value = password2.value

  if (password1Value === password2Value) {
    paragraphText.textContent = "Passwords match!"
    paragraphText.classList.add("valid")
    paragraphText.classList.remove("invalid")
  } else {
    paragraphText.textContent = "Passwords do not match!"
    paragraphText.classList.add("invalid")
    paragraphText.classList.remove("valid")
  }

  if (password1Value === "" && password2Value === "") {
    paragraphText.textContent = ""
  }
})

password2.addEventListener("input", () => {
  const password1Value = password1.value
  const password2Value = password2.value

  if (password1Value === password2Value) {
    paragraphText.textContent = "Passwords match!"
    paragraphText.classList.add("valid")
    paragraphText.classList.remove("invalid")
  } else {
    paragraphText.textContent = "Passwords do not match!"
    paragraphText.classList.add("invalid")
    paragraphText.classList.remove("valid")
  }
  if (password1Value === "" && password2Value === "") {
    paragraphText.textContent = ""
  }
})

const image4 = document.querySelector(".image4")

image4.addEventListener("mouseenter", () => {
  image4.style.transform = "rotate(360deg)"
})
image4.addEventListener("mouseleave", () => {
  image4.style.transform = "rotate(0deg)"
})

const arrowUp = document.querySelector(".arrow-up")

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowUp.style.display = "block"
  } else {
    arrowUp.style.display = "none"
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark")
    hamburgerIcon.classList.remove("fa-bars")
    menuList.style.display = "block"
  } else {
    hamburgerIcon.classList.add("fa-bars")
    hamburgerIcon.classList.remove("fa-xmark")
    menuList.style.display = "none"
  }
})

const darkMode = document.querySelector(".moon-icon")
const lightMode = document.querySelector(".sun-icon")
const body = document.querySelector("body")
const header = document.querySelector("header")
const heading = document.querySelector(".sec-heading h1")
const form = document.querySelector(".sec3")
const arrowUpIcon = document.querySelector(".icon1 i")
const fbIcon = document.querySelector(".fa-facebook")
const igIcon = document.querySelector(".fa-instagram")
const xIcon = document.querySelector(".fa-x-twitter")
const footerP = document.querySelector(".footer-box p")

darkMode.addEventListener("click", () => {
  body.style.backgroundColor = "black"
  header.style.backgroundColor = "#152d46"
  heading.style.color = "white"
  menuList.style.backgroundColor = "#152d46"
  image1.style.boxShadow = "0 20px 25px -5px #152d46, 0 8px 10px -6px #152d46"
  image2.style.boxShadow = "0 20px 25px -5px #152d46, 0 8px 10px -6px #152d46"
  image3.style.boxShadow = "0 20px 25px -5px #152d46, 0 8px 10px -6px #152d46"
  form.style.backgroundColor = "#152d46"
  arrowUpIcon.style.color = "white"
  fbIcon.style.color = "white"
  igIcon.style.color = "white"
  xIcon.style.color = "white"
  footerP.style.color = "white"
})

lightMode.addEventListener("click", () => {
  body.style.backgroundColor = "white"
  header.style.backgroundColor = "#2c5f95"
  heading.style.color = "#4c89ca"
  menuList.style.backgroundColor = "#2c5f95"
  image1.style.boxShadow = "-14px 14px 32px #b7b3b3, 14px -14px 32px #fff"
  image2.style.boxShadow = "-14px 14px 32px #b7b3b3, 14px -14px 32px #fff"
  image3.style.boxShadow = "-14px 14px 32px #b7b3b3, 14px -14px 32px #fff"
  form.style.backgroundColor = "#4c89ca"
  arrowUpIcon.style.color = "#2c5f95"
  fbIcon.style.color = "#2c5f95"
  igIcon.style.color = "#2c5f95"
  xIcon.style.color = "#2c5f95"
  footerP.style.color = "#2c5f95"
})
