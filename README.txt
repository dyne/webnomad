     Dyne.org software foundry presents...
                __                                  __ 
.--.--.--.-----|  |--.-----.-----.--------.---.-.--|  |
|  |  |  |  -__|  _  |     |  _  |        |  _  |  _  |
|________|_____|_____|__|__|_____|__|__|__|___._|_____|
       A slick and static website publisher       v 0.2

       http://dyne.org/software/webnomad

* INTRODUCTION

  WebNomad is a set of shell scripts to generate websites and image
  galleries fit for desktop as well mobile and tablet browsing. It can
  be operated on any device running ZShell, its themes are based on
  Bootstrap CSS, pages can be written in Markdown syntax interlaced
  into HTML, while it uses JQuery and BlueImp to make slideshows using
  all files found into a directory.

* USE INSTRUCTIONS 

  As of now, webnomad is operated from a Terminal.
  A simple interface might be built in future if donors request it.

** BASIC USAGE

  First create a directory for your website, then place the webnomad
  directory inside it, i.e. the one downloaded from the source archive
  or git repo.

  From a terminal, cd inside your new website's directory and run:

    ./webnomad/init 

  the skeleton of your new webpage is created inside the directory:

    views/ -> contains the pages you want to edit
    tmpl/ -> contains templates like header, footer and navbar

  Now go customise files in tmpl/ with your favorite HTML editor and
  then go as well in views/ to create your web pages, better start
  from index.html.

  To see results, run ./webnomad/render and your webpages will be in
  pub/ with all markdown rendered, header navbar and footer
  applied. To preview open the pub/index file with a web browser
  (chromium is recommended, since it does not need the .html extension
  on local files...)

  Upload your website with a recursive Scp or Rsync from pub/* on any
  webserver.

** USE MARKDOWN

   To avoid the tedious task of using HTML tags for everything, even
   simple formatted text, webnomad supports interlacing markdown
   sections within an HTML page. This is simply done opening and
   closing the tags <markdown> ... </markdown> which can recur more
   than once in the same document.

   This approach simplifies the use of markdown within a bootstrap
   styled page, where you can use the <div> classes of bootstrap as
   usual, directly in HTML, but then go on filling them up with our
   beloved simplified markup - *cough* *cough* - markdown.

** IMAGE SLIDESHOW

  To create an image slideshow simply create a page with extension
  .gallery inside the views/ directory, for example one can call it
  views/vacation_in_Italy.gallery

  To add images into it one should create a -files directory inside
  views/ better if named after the gallery page, something like:
  views/vacation_in_Italy-files/

  Proceed copying your images inside the -files directory, resized to
  the format you want them to appear in the slideshow. One can also
  use webnomad/convert an optional script that helps to do batch
  conversions.

  Now fill in the filenames of your images inside the .gallery file,
  one per line, relative to the views/ path. For instance our
  views/vacation_in_Italy.gallery file can contain:

  vacation_in_Italy-files/Fontana_di_Trevi.jpeg
  vacation_in_Italy-files/Torre_di_Pisa.jpeg
  vacation_in_Italy-files/Er_cupolone.jpeg
  vacation_in_Italy-files/Spiaggia_con_bagnanti.jpeg
  vacation_in_Italy-files/Io_e_te_sudati.jpeg

  At last run webnomad/render and the slideshow will be ready at the
  page in pub/ which in our case is pub/vacation_in_Italy.

* DEVELOPERS

  Bleeding edge is on GitHub. see https://github.com/dyne/webnomad

  We'll react to pull requests

  Come on IRC channel #dyne via https://irc.dyne.org to get in touch.

* DONATE

  Money donations are very welcome and well needed

  https://www.dyne.org/donate

* LICENSE

WebNomad is Copyright (C) 2012-2013 Denis Roio <jaromil@dyne.org>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public
License along with this program.
If not, see http://www.gnu.org/licenses
