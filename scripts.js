const SHEET_ID = "1JoRsEy927ZjwK181vw94dTEZeS7nhUwQfOaL-l3JNfQ";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXM9_nlAaXdMnctMjWTvKz0JT335X_eGlI-kzntUQBIjvnylOZcVCdHWG4qKVTncRz6CChTdiJdovPedGwu_rtH7fBQ8DpQ-AU7pFAely61nJ2J9NkgQkusNFEvs88kccAMsI9qsOVingUStYf_lFn69aCgYKATASARISFQEjDvL94IR60X96Baau45F9Ioe4eQ0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/1JoRsEy927ZjwK181vw94dTEZeS7nhUwQfOaL-l3JNfQ/values/almuerzo!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ya29.a0Aa4xrXM9_nlAaXdMnctMjWTvKz0JT335X_eGlI-kzntUQBIjvnylOZcVCdHWG4qKVTncRz6CChTdiJdovPedGwu_rtH7fBQ8DpQ-AU7pFAely61nJ2J9NkgQkusNFEvs88kccAMsI9qsOVingUStYf_lFn69aCgYKATASARISFQEjDvL94IR60X96Baau45F9Ioe4eQ0163`,
    },
  }
//esperamos el response
)

.then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        // Tipo de Comida
        const itemTipo = document.createElement("span");
        itemTipo.className = "item tipo";
        itemTipo.innerHTML = values[i][1];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);
        producto.appendChild(itemTipo);
       

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});