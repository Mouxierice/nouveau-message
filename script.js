const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yessBtn = document.querySelector(".yess-btn");
const NONBtn = document.querySelector(".NON-btn");

yessBtn.addEventListener("click", () => {
  question.innerHTML = "RAYYY see you in february 14 KKKKK";
  gif.src =
  "https://media1.tenor.com/images/5acd718308f3d8212a9279d094ae8ea2/tenor.gif?itemid=16191958";
});

NONBtn.addEventListener("mouseover", () => {
  const NONBtnRect = NONBtn.getBoundingClientRect();
  const maxX = window.innerWidth - NONBtnRect.width;
  const maxY = window.innerHeight - NONBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  NONBtn.style.left = randomX + "px";
  NONBtn.style.top = randomY + "px";
});