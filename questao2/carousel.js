const controls = document.querySelectorAll(".control");
let currentItem = 0;
let items = document.querySelectorAll(".card");
const maxItems = items.length;

items.forEach((item) =>{
  item.addEventListener("click", (e) =>{
    let element = e.target;

    console.log(element);

    while(!element.classList.contains("card")){
      if(element.parentNode){
        element = element.parentNode;
        console.log(element);
      }
    }

    
    items.forEach((item) =>{
      item.classList.remove("current-card");
    })


    element.classList.add("current-card");
    element.scrollIntoView({
      behavior: "smooth",
      block: 'nearest', 
      inline: 'start'
    })
    
  })
})

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
