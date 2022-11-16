const controls = document.querySelectorAll(".control");
let currentItem = 0;
let items = document.querySelectorAll(".card");
const maxItems = items.length;

console.log(controls);

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    items.forEach((item) =>{
      item.classList.remove("current-card");
    })

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items[currentItem].classList.add("current-card");
    items[currentItem].scrollIntoView({
      behavior: "smooth",
      block: 'nearest', 
      inline: 'start'
    });

  });
});
