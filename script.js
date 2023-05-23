function semaforo() {
  const red = document.querySelector(".red");
  const yellow = document.querySelector(".yellow");
  const green = document.querySelector(".green");
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");
  const btn3 = document.querySelector("#btn3");
  const btn4 = document.querySelector("#btn4");



  btn1.addEventListener("click", () => {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "white";
    green.style.backgroundColor = "white";
  });

  btn2.addEventListener("click", () => {
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "white";
    green.style.backgroundColor = "white";
  });

  btn3.addEventListener("click", () => {
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "white";
    yellow.style.backgroundColor = "white";
  });

  btn4.addEventListener("click", () => {
    green.style.backgroundColor = "white";
    red.style.backgroundColor = "white";
    yellow.style.backgroundColor = "white";
  });
}

semaforo();
