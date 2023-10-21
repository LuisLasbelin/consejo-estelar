document.getElementById('rightSidebar').innerHTML = `<h2>Novedades</h2>
<div class="box">
    <p>¡Estrenamos página web!</p>
    <p>En esta página publicaremos entradas de blog, anuncios de juegos propios y avances. Además de
        algo de material adicional
        que será exclusivo de aquí para nuestros estimados visitantes.
    </p>
</div>
<h2>Contacto</h2>
<p>Al habla Luis "Lasbelin" Belloch, soy el administrador de esta página y del Consejo Estelar. Puedes
    contactarme por <a href="mailto:bellochluis@gmail.com">bellochluis@gmail.com</a></p>
<h3>Boletín</h3>
<form action='bellochluis@gmail.com' method='POST' enctype='text/plain' mail='@'>
    <label for="mail">Mail:</label><br>
    <input type="text" id="mail" name="mail"><br>
    <input type="submit" value="Send">
</form>`