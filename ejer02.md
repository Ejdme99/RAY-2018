en el ejercicio 2 he añadido a parte de 2 paginas nuevas (HTML5 y CSS)
logre colocar en la de html algunos tipos de botones y una barra de progreso
ejemplo html:                                    <h2 class="post-title bold"><a href="#">HTML5</a></h2>
                                    <!--<h3 class="post-author"><a href="#">Posted by micron News</a></h3>-->
                                    <br/>
                                    <p> HTML5 es la quinta revisión importante del lenguaje básico de la World Wide Web (www), HTML. HTML5 especifica dos variantes de sintaxis para HTML.<br> <br>

                                   como se sabe ya el hmtl es un de los lenguajes que se usa en la creacion de paginas web ya sea un blog o cualquier otro tipo de paginapara poder ver videos redes sociales etc <br> <br>

algunos de los tipos de comandos usados en hmtl5 pueden ser los siguientes:
</p>
<br/>
<h2 class="post-title bold"><a href="#">Comandos</a></h2>                                    
<br/>
<blockquote> 
<p>div:<div>holo</div></p>
<p>-boton normal: es un boton simple<button>hola</button><br> <br></p>
<p>-boton radial: es un boton de seleccion qe se usa en examenes tipo test etc..
<p>Elegir nacionalidad</p>
<p>
	Española: <input type="radio" name="citizenship" /><br />
	China: <input type="radio" name="citizenship" /><br />
	Rusa: <input type="radio" name="citizenship" />
</p>
<p> menu de seleccion multiple: un menu que cuando presionas en el se desplega una lista <select name="OS">
   <option value="1">opcion 1</option> 
   <option value="2">opcion 2</option> 
   <option value="3">opcion 3</option>
   <option value="10">opcion 4</option> 
   <option value="11">opcion 5</option> 
</select></p>
<p> panel de entrada de texto:se coloca un texto en el 
<input type="text" name="caja"></p>
<p>slider: una imagen deslizandose
			<div class="container">
				<div class="row">
					<div class="main-slider">
						<div class="slide-text">
						</div>
						<img src="https://pm1.narvii.com/6280/1f62c0271300306d05134eac33e412f34b90f055_hq.jpg" class="slider-hill" alt="slider image">
					</div>
				</div>
			</div>
 </p>
 <p>H1: entrada de texto <h1>esto seria el h1</h1></p>
 <p>tabla: una tabla <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr></table></p>
  <p>imagen:poner una imagen <img src="https://www.pokeflix.tv/static/thumbnails/01-indigo-league/12.png"> </p>
  <p>barra de progreso: e s una barra la cual no se termina de llenar nunca como un "cargando" <form name="barra" method="post" action="http://pagina.com/send.php">
  <!-- Barra de progreso -->
  <progress></progress>
</form></p>

Recursos: en contre todo o casi todo sobre el html aqui:https://developer.mozilla.org/es/docs/Web/html

CSS
<h2 class="post-title bold"><a href="#">CSS</a></h2>
<!--<h3 class="post-author"><a href="#">Posted by micron News</a></h3>-->
<br/>
<p>CSS es un tipo de hoja de estilo y diseño de una pagina por el que se poran añadir mejoras o mas interaccione que si solo se usara HTML5<br> <br></p><br/>
<h2 class="post-title bold"><a href="#">Comandos</a></h2><br/>
<blockquote> 
<p><strong>selector css</strong>:se usa para remarcar o denominar ciertos "objetos" por ejemplo ( #firstname { 
background-color: yellow; 
} )</p>
<p><strong>Display</strong>: es una de los usos de css que determina como se demuestra la imagen, texto etc.. ejemplo: {display: none;} </p>
<p><strong>Position</strong>:como el nombre ya indica este determina la posicion ejemplo: "position: static;"</p>
<p><strong>Margin</strong>:este determina el margen que deja en los cuatro lados ejemplo: 
margin-bottom: 0
margin-left: 0
margin-right: 0
margin-top: 0</p>
<p><strong>Padding</strong>:establece el espacio de relleno peido por todos los lados del elemento ejemplo: 
padding-bottom: 0
padding-left: 0
padding-right: 0
padding-top: 0</p>
<p><strong>Text-align</strong>: determina hacia que lado se alinea un texto ya sea izq,drch,centro etc: "text-align:center" </p>
<p><strong>Background</strong>:esto define los valores que tendria el fondo en toda una unica regla de css :"background: [  < background-color>    ||  < background-image>       ||
               < background-repeat>   ||  < background-attachment>  ||
               < background-position>
            ]   |   inherit ;"</p>
            <p><strong>Color</strong>:determina un color en el espacio de los RGB y esto son formas de poner el mismo color de rgb:#f03,
 #F03,
 #ff0033,
 #FF0033
 ,rgb(255,0,51)</p>
<p><strong>Border</strong>:esto permite definir todos los border con una unica regla: "border: [border-width || border-style || border-color | inherit] ;"</p>
<p><strong>Box-shadow</strong>:describe distintos tipos de sombra ue se puede poner:"box-shadow:  none | [inset? && [ < offset-x> < offset-y> < blur-radius>? < spread-radius>? < color>? ] ]#"</p>


Recursos: en contre todo o casi todo sobre el css aqui:https://developer.mozilla.org/es/docs/Web/CSS
