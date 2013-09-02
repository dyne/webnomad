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

  Create a directory for your website and place the webnomad
  directory inside it, from a tar.gz archive or git or your
  own copy, i.e: git clone git@code.dyne.org:webnomad.git

  Run ./webnomad/init and the skeleton of your new webpage is
  created inside the directory.

  Customise files in tmpl/ and create pages in views/

  Run ./webnomad/render and the webpage will be in pub/

  Upload your website from pub/ on any webserver.


* DEVELOPERS

  Bleeding edge is on GitHub. see https://github.com/dyne/webnomad

  We'll react to pull requests

  Come on IRC channel #dyne via https://irc.dyne.org to get in touch.

* DONATE

  Money donations are very welcome and well needed

  http://dyne.org/donate



* LICENSE

# Copyright (C) 2012-2013 Denis Roio <jaromil@dyne.org>
#
# This source  code is free  software; you can redistribute  it and/or
# modify it under the terms of  the GNU Public License as published by
# the Free  Software Foundation; either  version 3 of the  License, or
# (at your option) any later version.
#
# This source code is distributed in  the hope that it will be useful,
# but  WITHOUT ANY  WARRANTY;  without even  the  implied warranty  of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
# Please refer to the GNU Public License for more details.
#
# You should have received a copy of the GNU Public License along with
# this source code; if not, write to:
# Free Software Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.

