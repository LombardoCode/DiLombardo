<header>
    <div id="hero" class="fixed">
        <?php include 'vistas/global/navegacion.php'; ?>
        <div id="div_video_background_hero">
            <div id="div_bienvenida">
                <img src="img/global/logo.png" alt="">
            </div>
            <video id="video-hero" autoplay="true" type="video/mp4" loop="true" muted>
                <source src="video/index/hero_video.m4v">
            </video>
            <div class="overlay-hero"></div>
        </div>
    </div>
</header>
<!-- Sección: "Realiza tu reservación" -->
<section id="seccion-reservacion">
    <div class="container">
        <div id="contenido-reservacion">
            <h3>Realiza tu reservación</h3>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card degradado-blanco-gris">
                        <i class="fas fa-map-marker-alt color-naranja pb-3"></i>
                        <h4 class="color-naranja pb-3">Sucursal Sucursal#1</h4>
                        <h5 class="pb-3">Ave. XXXXX, #XXX</h5>
                        <h6><i class="fas fa-phone-square-alt mr-2"></i>XX-XX-XX-XX</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card degradado-blanco-gris">
                        <i class="fas fa-map-marker-alt color-naranja pb-3"></i>
                        <h4 class="color-naranja pb-3">Sucursal Sucursal#2</h4>
                        <h5 class="pb-3">Ave. XXXXX, #XXX</h5>
                        <h6><i class="fas fa-phone-square-alt mr-2"></i>XX-XX-XX-XX</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card degradado-blanco-gris">
                        <i class="fas fa-map-marker-alt color-naranja pb-3"></i>
                        <h4 class="color-naranja pb-3">Sucursal Sucursal#3</h4>
                        <h5 class="pb-3">Ave. XXXXX, #XXX</h5>
                        <h6><i class="fas fa-phone-square-alt mr-2"></i>XX-XX-XX-XX</h6>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card degradado-blanco-gris">
                        <i class="fas fa-map-marker-alt color-naranja pb-3"></i>
                        <h4 class="color-naranja pb-3">Sucursal Sucursal#4</h4>
                        <h5 class="pb-3">Ave. XXXXX, #XXX</h5>
                        <h6><i class="fas fa-phone-square-alt mr-2"></i>XX-XX-XX-XX</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Sección: "Sirviendo pizzas desde XXXX" -->
<section id="seccion-sirviendo-pizzas" class="h-100">
    <div class="overlay">
        <div class="container h-100">
            <div id="contenido-sirviendo-pizzas" class="h-100">
                <div id="frase-sirviendo-pizzas" class="d-flex flex-column justify-content-center align-items-center h-100 px-5">
                    <h4 class="text-center">Sirviendo pizzas desde 1972</h4>
                    <p class="text-center">En Di'Lombardo estamos muy orgullosos de cumplir <span id="anios-transcurridos"></span> años de servir nuestra comida y que pueda alegrar a la gente con nuestro delicioso sazón.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    let anio_actual = new Date().getFullYear();
    let anios_diferencia = anio_actual - 1972;
    document.getElementById("anios-transcurridos").innerHTML = anios_diferencia;
</script>