/* Geolocalización */
let div_advertencia = document.getElementById("contenedor-advertencia");
// Detectamos el país del usuario
let pais_del_usuario = geoplugin_countryName();

if (pais_del_usuario !== "Mexico") {
    div_advertencia.innerHTML = `
        <p id="advertencia">Estimado usuario, actualmente la cadena de restaurantes Di' Lombardo no cuenta con sucursales en ${pais_del_usuario}. No obstante, puede consultar las sucursales que tenemos en México por el momento.
    `;
} else {
    document.getElementById("seccion-sucursales").style.paddingTop = "80px";
}

let select_sucursal = document.getElementById("select_sucursal");
let boton_buscar = document.getElementById("boton_buscar");
let contenedor_de_mapa = document.getElementById("mapa");

boton_buscar.addEventListener("click", function(e) {
    e.preventDefault();
    let sucursal = select_sucursal.value;

    inyectarMapa(sucursal);
});

function inyectarMapa(sucursal) {
    let link_del_mapa;

    switch (sucursal) {
        case "Guadalupe":
            link_del_mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57526.234929147104!2d-100.24880768854818!3d25.691518832283887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b55dd7c0680b7d2!2sPizza%20Hut!5e0!3m2!1ses-419!2smx!4v1571227679144!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
            break;
        case "Apodaca":
            link_del_mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.6428428504237!2d-100.2389779853214!3d25.782358014038394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662edd2da68361d%3A0xa0cab96fd5060977!2sPIZZA%20HUT%20Sendero%20Apodaca!5e0!3m2!1ses-419!2smx!4v1571227888224!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
            break;
        case "SanNicolas":
            link_del_mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57514.79999302741!2d-100.28635802089843!3d25.7151825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eae37d3a1c7d%3A0x228fd63db3177139!2sPizza%20Hut!5e0!3m2!1ses-419!2smx!4v1571227915575!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
            break;
        case "SanPedro":
            link_del_mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230089.57806498656!2d-100.43790912829668!3d25.6994685184103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629609daf01a8f%3A0x9fc19b11bdeff8ad!2sPizza%20Hut!5e0!3m2!1ses-419!2smx!4v1571227937694!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
            break;
    }
    // Inyectamos el mapa
    if (link_del_mapa !== undefined) {
        contenedor_de_mapa.innerHTML = link_del_mapa;
    }
}