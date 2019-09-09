// CAMBIO DE IMAGENES EN EL CARRUSEL

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// CAMBIAR EL WIDTH Y EL HEIGHT

function sizeWidth(width) {
  document.querySelectorAll(".mySlides").forEach(e => e.width = width);
}

function sizeHeight(height) {
  document.querySelectorAll(".mySlides").forEach(e => e.height = height );
}


function size(s) {
  document.querySelectorAll(".estilo").forEach(e => $(e).css('justify-content', s))
  
}

$('input[type=radio]').change(ev => {
  size(ev.target.value)
})


