...La factoría de software libre Dyne.org presenta...
                    __                                  __ 
    .--.--.--.-----|  |--.-----.-----.--------.---.-.--|  |
    |  |  |  |  -__|  _  |     |  _  |        |  _  |  _  |
    |________|_____|_____|__|__|_____|__|__|__|___._|_____|
      Un astuto publicador de sitios web estáticos   v 0.3

http://dyne.org/software/webnomad

# INTRODUCCIÓN

 WebNomad es un conjunto de scripts que permiten generar sitios web y galerías de imágenes con optimización para mostrarse en tamaño escritorio y también para navegación con tabletas o móbiles. Puede ser operado en cualquier dispositivo con consolas Zshell; los temas están basados en Bootstrap CSS; las páginas pueden ser escritas en syntaxis Markdown insertada dentro de HTML; el pase de imágenes (slideshow) utiliza JQuery y BlueImp, retomando todos los archivos que encuentran dentro de un directorio.


## INSTRUCCIONES DE USO

 Por ahora, WebNomad se opera desde una Terminal.
 En el futuro, y si las donaciones lo permiten, se podría construir una interfaz simple.

## USO BÁSICO 

 Primero crea un directorio para tu sitio web y coloca dentro el folder de webnomad, por ejemplo, aquel que descargaste del archivo fuente o del repositorio git.

 Desde una terminal, colocate dentro del directorio (cd) de tu nuevo sitio web y ejecuta lo siguiente:
  
    ./webnomad/init 

 con esto, el esqueleto de tu nuevo sitio web es creado dentro del directorio:

    views/ -> contiene las páginas que quieras editar
    tmpl/ -> contiene plantillas como header (cabezal), footer (pie de página), y navbar (barra de navegación).

 Ahora utiliza tu editor de HTML favorito para ajustar archivos que están dentro del directorio tmpl/ y luego haz lo mismo con los de views/ para crear tus páginas web; siempre es mejor comenzar editando index.html

 Para ver los resultados, ejecuta:

    ./webnomad/render

 Tus páginas web seran creadas dentro de pub/ y tendrán todo el marcado establecido, incorporando el cabezal, la barra de navegación y el pie de página.

 Para ver la vista previa abre el archivo pub/index con un navegador web.

 Para ver los temas disponibles, ejecuta:

    ./webnomad/theme

 Para elegir alguno de los temas, ejecuta:

    ./webnomad/theme/cyborg

 Carga tu sitio web al servidor usando SCP recursivo o Rsync, desde pub/*

## UTILIZA MARKDOWN

 Para evitar la tediosa tarea de utilizar etiquetas HTML para todo, incluso para el formateo de texto simple, webnomad permite insertar secciones escritas en markdown dentro de una página HTML. Esto se logra simplemente abriendo y cerrando las etiquetas características de este lenguaje <markdown> ... </markdown>, lo cual puede ocurrir varias veces en el mismo documento.

 Esta solución simplifica el uso de este lenguaje de marcado ligero dentro de una página bootstrap, en la que normalmente puedes utilizar clases <div> directamente en el HTML para estilizar bootstrap. Pero además puedes formatear el contenido de estos bloques <div> con nuestro querido lenguaje de marcado - *coff* *coff* - markdown.

## PASE DE IMÁGENES 

 Para crear un pase de imágenes (slideshow) simplemente crea una página con la extensión .gal y colocala dentro del directorio views/, por ejemplo se podría llamar views/paisajes_de_Oaxaca.gal

 Y para agregarle las imágenes debes crear un directorio tipo -files dentro de views/, mucho mejor si nombras este directorio igual que el nombre de la galería pero incorporando el sufijo -files. Algo similar a esto: views/paisajes_de_Oaxaca-files

 Copia tus imágenes dentro del directorio -files, redimensionalas al formato que quieras que aparezcan en el slideshow. Opcionalmente puedes usar el script webnomad/convert para ayudarte con las conversiones en bloque (Requiere ImageMagick).

 Ahora edita el archivo .gallery para colocar los nombres de cada una de las imágenes, una por línea, indicando su ruta relativa a views/

 En nuestro ejemplo, el archivo views/paisajes_de_Oaxaca.gal puede contener:
    views/paisajes_de_Oaxaca-files/Mitla.jpeg
    views/paisajes_de_Oaxaca-files/Mixteca_Nuyoo.jpeg
    views/paisajes_de_Oaxaca-files/Cuajimoloyas.jpeg
    views/paisajes_de_Oaxaca-files/Miahuatlan.jpeg
    views/paisajes_de_Oaxaca-files/Tehuantepec.jpeg

 Finalmente ejecuta webnomad/render y el slideshow estará listo en la página en pub/ el cual en nuestro caso es pub/paisajes_de_Oaxaca
        
# DESARROLLO

 Lo más actual está en GitHub https://github.com/dyne/webnomad

 Ven al canal IRC #dyne via https://irc.dyne.org para entrar en contacto

# DONAR

 Donaciones en dinero son muy bienvenidas y necesarias 

 https://www.dyne.org/donate

# LICENCIA

 WebNomad es Copyright (C) 2012-2014 Denis Roio <jaromil@dyne.org>

 Traducción al español de Vlax <https://lab.dyne.org/vlax>

 Este programa es software libre: puedes redistribuirlo y/o modificarlo dentro de los términos de la Licencia Pública General GNU Affero como es publicada por la Free Software Foundation, tanto en su versión 3 de la licencia, o (a tu elección) en cualquier versión posterior.

 Este programa se distribuye con el ánimo de que sea útil pero SIN NINGUNA GARANTÍA; ni siquiera la garantía implícita de MERCANTIBILIDAD o ADAPTABILIDAD A CUALQUIER PROPÓSITO PARTICULAR. Ver la Licencia Pública General GNU Affero para más detalles.

 Deberías recibir una copia de la Licencia Pública General GNU Affero junto con este programa. Si no es así, ver: http://www.gnu.org/licenses
