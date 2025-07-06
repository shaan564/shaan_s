const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3")
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
 var head = document.getElementById("heading");
 btnYes.onclick = function(){
  head.innerHTML = "Main jaanta tha… Aap NO bol hi nahi sakti 😌🙈 Aakhir aap sirf meri ho  😍💞 Meri cutiepie 😘💖"
  
 }

 btnNo.onclick = function(){
  head.innerHTML ="😏 Sharam-waram aati hai ki nahi? Turant NO bolne aa gaye 😒🛑 Jao yahan se... 🚶‍♀️💨 Chup chaap se HAAN bolo 😌"
 }

// function getRandomNumber(min, max) {
//   // Calculate the random number between min and max (inclusive)
 
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//   return randomNumber;
// }

// btnNo.addEventListener("mouseover", (event) => {
//   const containerHeight = container.getBoundingClientRect().height;
//   const containerWidth = container.getBoundingClientRect().width;
//   const btnHeight = btnNo.getBoundingClientRect().height;
//   const btnWidth = btnNo.getBoundingClientRect().width;
//   const btnTop = btnNo.getBoundingClientRect().top;
//   const btnLeft = btnNo.getBoundingClientRect().left;

//   let newTop = btnTop;
//   let newLeft = btnLeft;
//   while (Math.abs(newTop - btnTop) < containerHeight / 3) {
//     newTop = getRandomNumber(0, containerHeight - btnHeight);
//   }

//   while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
//     newLeft = getRandomNumber(0, containerWidth - btnWidth);
//   }

//   btnNo.style.top = Math.floor(newTop) + "px";
//   btnNo.style.left = Math.floor(newLeft) + "px";
// });

btnYes.addEventListener("click", (e) => {
  // btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
   imageThree.classList.add("hide");
});

btnNo.addEventListener("click", (e) => {
  // btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.add("hide");
  imageThree.classList.remove("hide")
});
