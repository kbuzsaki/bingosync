Bingosync.com
===

This is the repository powering [bingosync.com](http://bingosync.com/),
a web application that lets people collaboratively work on "bingo boards"
when speedrunning games.

For more information on speedrunning and bingo, you can read:
  - [the bingosync about page](http://bingosync.com/about)
  - [the speedrunslive faq](https://www.speedrunslive.com/rules-faq/faq)
  - [the about section of an SRL bingo card](https://www.speedrunslive.com/tools/bingo/oot)

#### Fun Implementation Details! :D

Bingosync is implemented using a combination of the [django](https://www.djangoproject.com/)
and [tornado](http://www.tornadoweb.org/) web servers. The django web server
(bingosync-app) hosts the main website content, serves most of the pages,
and talks to the database. The tornado web server (bingosync-websocket)
maintains all websocket connections to the site and passes messages along
to the clients in a "publish and subscribe" kind of model.

The actual site is hosted on one of my personal machines. It's running behind 
an [nginx](http://wiki.nginx.org/Main) proxy that serves static files and splits
traffic to the django and tornado servers. I use [postgres](http://www.postgresql.org/)
for the database. Conveniently, this machine is the same one that I run 
[bingobot](https://github.com/kbuzsaki/bingobot) off of. Maybe there's some 
opportunity for integration there in the future :)
