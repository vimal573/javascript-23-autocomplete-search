const data = document.querySelector(".data");
const autoComEl = document.querySelector(".autocom-box");

let suggestions = [
  "Github",
  "Codepen",
  "Google",
  "Fiverr",
  "Upwork",
  "CodingMak",
  "CodingMaker",
  "YouTube",
  "YouTube cod",
  "YouTube CodingMak",
  "YouTube CodingMaker",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Developer",
  "Web Designer",
  "website Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

function fillSearch() {
  data.value = document.querySelector(".li").textContent;

  autoComEl.innerHTML = "";
}

function result() {
  const autocomp = suggestions.filter((el) => {
    return el.toLowerCase().startsWith(data.value.toLowerCase());
  });

  const resMarkup = autocomp.map(
    (el) => `<li class='li' onclick=fillSearch()>${el}</li>`
  );

  return resMarkup.join("");
}

data.addEventListener("keyup", () => {
  if (!data.value) {
    autoComEl.innerHTML = "";
    return;
  }

  autoComEl.innerHTML = result();
});
