// CAMBIO DE IMAGENES EN EL CARRUSEL
$(_ => {
  const STYLE_DEFAULT = {
    aStyle: {
      display: "block"
    },
    imgStyle: {
      width: "357",
      height: "200"
    }
  };

  const STYLES = [
    {
      number: "001",
      aStyle: { textAlign: "center" },
      imgStyle: {
        width: "357",
        height: "200"
      }
    },
    {
      number: "002",
      imgStyle: {
        borderRadius: "50%"
      }
    },
    {
      number: "003",
      imgStyle: {
        borderRadius: "50px 50px 0px 0px"
      }
    },
    {
      number: "004",
      imgStyle: {
        borderRadius: "20%"
      }
    },
    {
      number: "005",
      imgStyle: {
        width: "150px",
        height: "auto",
        padding: "5px",
        borderRadius: "4px",
        border: "1px solid #ddd"
      }
    },
    {
      number: "006",
      imgStyle: {
        opacity: "0.5"
      }
    },
    {
      number: "007",
      imgStyle: {
        filter: "grayscale(100%)"
      }
    },
    {
      number: "008",
      imgStyle: {
        filter: "blur(5px)"
      }
    },
    {
      number: "009",
      imgStyle: {
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
      }
    },
    {
      number: "010",
      imgStyle: {
        clipPath:"polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)"
      }
    },
    {
      number: "011",
      imgStyle: {
        clipPath:"polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"
      }
    }
  ];
  // alignstyle
  let alignStyle = {};

  // widthstyle

  let widthStyle = {};

  // heightStyle

  let heightStyle = {};

  // CAMBIAR EL WIDTH Y EL HEIGHT

  window.sizeWidth = function sizeWidth(width) {
    widthStyle = {
      imgStyle: {
        width: width
      }
    };
    updateStyle();
  };

  window.sizeHeight = function sizeHeight(height) {
    heightStyle = {
      imgStyle: {
        height: height
      }
    };
    updateStyle();
  };

  // izquierda, centro o derecha imagen

  function size(s) {
    alignStyle = {
      aStyle: {
        float: s,
        textAlign: s
      }
    };
    updateStyle();
  }

  $("input[type=radio]").on("click", ev => {
    size(ev.target.value);
  });

  //  ANTERIOR Y SIGUIENTE IMAGEN

  let currentStyleIndex = 0;
  

  $("#next-style").click(_ => {
    if (currentStyleIndex == STYLES.length - 1) {
      currentStyleIndex = 0;
    } else { 
      currentStyleIndex += 1;  
    }
    updateStyle();
  });

  $("#prev-style").click(_ => {
    if (currentStyleIndex == 0) {
      currentStyleIndex = STYLES.length - 1;
    } else {
      currentStyleIndex -= 1;     
    }
    updateStyle();
  });


  // ACTUALIZAR LOS ESTILOS

  const updateStyle = _ => {
    const style = window._.merge(
      {},
      STYLE_DEFAULT,
      STYLES[currentStyleIndex],
      alignStyle,
      widthStyle,
      heightStyle
    );

     $('#account').val(currentStyleIndex + 1)
    

    const $preview = $("a#estilo");
    const $previewImage = $("a#estilo > img");

    $preview.attr("style", "");
    $previewImage.attr("style", "");

    $preview.css(style.aStyle);
    $previewImage.css(style.imgStyle);

    $("#textarea").val($preview.get(0).outerHTML);
  };

  // COPIAR DEL TEXTAREA

  window.copy = function copy() {
    let copyText = document.getElementById("textarea");
    copyText.select();
    document.execCommand("copy");
  };
  updateStyle();
});
