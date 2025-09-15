/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  const digito = Math.floor(Math.random()*10);
  const digitos = {
    0: ["a","b","c","d","e","f"],
    1: ["b","c"],
    2: ["a","b","g","e","d"],
    3: ["a","b","c","d","g"],
    4: ["f","g","b","c"],
    5: ["a","f","g","c","d"],
    6: ["a","f","g","e","d","c"],
    7: ["a","b","c"],
    8: ["a","b","c","d","e","f","g"],
    9: ["a","b","c","d","f","g"],
  };
  document.querySelectorAll(".segment").forEach(seg => {
    seg.style.background = "#030303"; 
  });
    digitos[digito].forEach(id => {
    document.getElementById("seg-" + id).style.background="#e0e000"; 
  });
  console.log("Número mostrado:", digito);
}
