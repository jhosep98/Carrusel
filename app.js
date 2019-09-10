// CAMBIO DE IMAGENES EN EL CARRUSEL
$(_ => {
  const STYLE_DEFAULT = {
    divStyle: {
      display: "flex",
      width: "100%"
    }
  };

  const STYLES = [
    {
      divStyle: { justifyContent:'center' },
      imgStyle: {
        width: "512px",
        height: "288px"
      }
    },
    {
      imgStyle: {
        width: "512px",
        height: "288px",
        borderRadius: "50%"
      }
    },
    {
      imgStyle: {
        width: "512px",
        height: "288px",
        borderRadius: "50px 50px 0px 0px"
      }
    },
    {
      imgStyle: {
        width: "512px",
        height: "288px",
        borderRadius: "20%"
      }
    },
    {
      imgStyle: {
        width: "150px",
        height: "auto",
        padding: "5px",
        borderRadius: "4px",
        border: "1px solid #ddd"
      }
    },
    {
      imgStyle: {
        width: "512px",
        height: "288px",
        opacity: "0.5"
      }
    },
    {
      imgStyle: {
        width: "512px",
        height: "288px",
        filter: "grayscale(100%)"
      }
    }
  ];
// alignstyle
  let alignStyle = {}  

  // widthstyle

  let widthStyle = {}

  // heightStyle

  let heightStyle = {}

  // CAMBIAR EL WIDTH Y EL HEIGHT

  window.sizeWidth = function sizeWidth(width) {
    document.querySelectorAll(".mySlides").forEach(e => (e.width = width));
    
  }
  console.log(width)
  
  
  window.sizeHeight = function sizeHeight(height) {
    document.querySelectorAll(".mySlides").forEach(e => (e.height = height));
  }

  

  // izquierda, centro o derecha imagen

  function size(s) {
    alignStyle = {
      divStyle: {
        justifyContent: s,
      }
    }
    updateStyle();
  }

  $("input[type=radio]").on("click", ev => {
    size(ev.target.value);
  });

  //  ANTERIOR Y SIGUIENTE IMAGEN

  let currentStyleIndex = 0;

  $("#prev-style").click(_ => {
    if (currentStyleIndex == STYLES.length - 1) {
      currentStyleIndex = 0;
    } else {
      currentStyleIndex += 1;
    }
    updateStyle();
  });

  $("#next-style").click(_ => {
    if (currentStyleIndex == 0) {
      currentStyleIndex = STYLES.length - 1;
    } else {
      currentStyleIndex -= 1;
    }
    updateStyle();
  });

  // ACTUALIZAR LOS ESTILOS

  const updateStyle = _ => {
    const style = window._.merge({}, STYLE_DEFAULT, STYLES[currentStyleIndex], alignStyle, widthStyle, heightStyle);

    const $preview = $("div#estilo");
    const $previewImage = $("div#estilo > img");

    $preview.attr("style", "");
    $previewImage.attr("style", "");

    $preview.css(style.divStyle);
    $previewImage.css(style.imgStyle);
 
    $("#textarea").val($preview.get(0).outerHTML);
  };

  // COPIAR DEL TEXTAREA

  window.copy = function copy() {
    let copyText = document.getElementById("textarea");
    copyText.select();
    document.execCommand("copy");
  }
  updateStyle();
});


// const handler = ev => console.log(ev)

// document.querySelector('div').addEventListener('click', handler)
// $('div').click(handler)
// $('div').on('click', handler)
