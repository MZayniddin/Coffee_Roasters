const elPlanForm = document.querySelector(".order__option");
const elDrinkShow = document.getElementById("show-drink");
const elTypeShow = document.getElementById("show-type");
const elQuantityShow = document.getElementById("show-quantity");
const elGrindShow = document.getElementById("show-grind");
const elDeliverTimeShow = document.getElementById("deliver-time");
const elHamburger = document.querySelector(".hamburger");
const elModal = document.querySelector('.modal');

elHamburger.addEventListener("click", () => {
  elHamburger.classList.toggle('active');
  elModal.classList.toggle('active');
});

elPlanForm.addEventListener("change", (event) => {
  event.preventDefault();
  const elDrink = document.querySelector('input[name="drink"]:checked');
  const elType = document.querySelector('input[name="type"]:checked');
  const elQuantity = document.querySelector('input[name="quantity"]:checked');
  const elGrind = document.querySelector('input[name="grind"]:checked');
  const elDeliverTime = document.querySelector('input[name="deliver"]:checked');
  elDrinkShow.innerHTML = elDrink.value;
  elTypeShow.innerHTML = elType.value;
  elQuantityShow.innerHTML = elQuantity.value;
  elGrindShow.innerHTML = elGrind.value;
  elDeliverTimeShow.innerHTML = elDeliverTime.value;
})