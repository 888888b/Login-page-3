function classAdd(){
  const classBTN = document.getElementById("container1");
  const classBTN2 = document.getElementById("container2");
  const reset = document.getElementById("reset");
  reset.classList.toggle("ativo");
  classBTN.classList.toggle("ativo");
  classBTN2.classList.toggle("ativo");

  console.log(classBTN);
}


