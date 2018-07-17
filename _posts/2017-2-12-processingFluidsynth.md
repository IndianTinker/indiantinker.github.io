---
layout: post
title: Making processing and fluidsynth talk
image: https://blog.adafruit.com/wp-content/uploads/2012/09/256px-Processing_Logo_Clipped.svg_.jpg
location: IDC IIT Bombay India
tags:
- python
---

Just a quick post if you are interested in triggering notes from Processing to Fluidsynth. It could be great if your works have a visual component and you need responsive notes in the background that you wish to play using your soundfont via Fluidsynth. 

Fluidsynth listens to commands via a telnet socket on port 8888 (you can change this i guess) that you can write to using a processing sketch.

So, just write to the socket if something turns up. It makes it very useful while making realistic music installation when playing frequency correct notes. There is also an option to use minim library, but i found it pretty complex and wanted a modular approach where i can fiddle with the audio program. I also feel it is a bit more responsive. 

The code looks like :

<script src="https://gist.github.com/IndianTinker/b158269c985c8b7e182c646ee8b26662.js"></script>


Cheers,

Rohit




  

 

