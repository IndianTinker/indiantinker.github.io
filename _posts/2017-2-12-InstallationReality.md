---
layout: post
title: Men and Three Worlds
image: https://c1.staticflickr.com/1/436/32850126965_681d9b81e9.jpg
location: IDC IIT Bombay India
tags:
- stories
- installation
---

Installations are real fun. They are helpful in putting an idea across in an engaging way. This post describes the trials and tribulations we faced while working on an installation for IndiaHCI conference at IIT Bombay.

The idea initially was to ask people solve a rotating puzzle using in air gestures. In-air, gestures, Low tech ? Does it ring something to the occasional hacker? Yes we zeroed it on the ultrasonics for it. They work great but they are like pigeons you see. They don’t work well when a lot of them are around. They cause errors due to proximity with other sensors, angles etc.  

<blockquote class="instagram-media" data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:47.5462962962963% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-12-07T08:47:49+00:00">Dec 7, 2016 at 12:47pm PST</time> को <a href="https://www.instagram.com/p/BNtbMWwlrxD/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Rohit Gupta (@rohit7gupta) posted</a></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

We further had pin number issues as to connect 10 of these we would need at-least 20 pins (Trig and Echo) on each. This is not so exciting on an UNO. I experimented with the idea of multiplexing the trig pin. Just made the trig pin common to all. Then we had drive issues. Next we had a combination of 5 triggers clubbed together. It improved but occasionally a sensor or something would just go off. We tried trouble-shooting with a logic analyser. Nothing got shot though. The problem was zero-ed down to the fact that there is a propagation delay and also the current is not enough for the meters of wire we are dealing with. Maybe we could have tried using a MOSFET to drive the trigger pin. But well these **Maybes**. 

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32726543801/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/3/2501/32726543801_2766dc7d06.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

As its the case always, we were terribly short of time. We decided keep the core idea intact and changed the interaction to the world's most democratic way of doing things - *The Switch* 

Now electronically we were, pressing switches and moving motors. I **made** motor drivers using TIP122 darling-ton transistors. I have my ears plugged if your ask me whether I used free-wheeling diodes or not. The arduino is redundant now though. We did not use it. 

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32726504561/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/1/288/32726504561_677c071241.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The motors and the baffling wires. We had a volunteer (Rishabh) with us to help us.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32696598642/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/4/3803/32696598642_7ef62c024d.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Now, if you are wondering what puzzle ? There were several ideas we played with like a three faced puzzle that have a common element so every state of the puzzle made some sense and only the completed one made most sense, or we could have a generative story puzzle which had constant fun at every state of the puzzle, or we could have a *cards against humanity* kind of gameplay . Since, it was desired to keep it more visual rather than cerebral. We gave to using pictures. Thanks to **Salik** from senior VC with some help from Malay we had an amazing eye puzzle. 

The art was printed on a HP sheet and was hand cut to make those triangles. 

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32035519643/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/3/2474/32035519643_a2b5fda13d.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The frame looked like :

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32696619622/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/1/292/32696619622_934a5420b5.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The puzzle represents reality. There are tons of realities that we are exposed to. Some we like, some we make and some we live in. There is a constant struggle to make our reality the way we see. But its difficult, chaotic and challenging. Then you **see** the reality and try to change it but its not entirely in your control.

This was the final idea of our installation titled - *Men and Three Worlds* .

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32850126965/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/1/436/32850126965_681d9b81e9.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8" align="center"></script>

> The above image was clicked at 4am and has historical and emotional relevance to me , my amazing seniors Herold and Abhijith . #RaatKePathar

The participants will be presented with a console to adjust the puzzle state and they have to align the entire matrix to make an image. The catch is that the mapping is *real*. There is a two stage randomness. Some of the sections move clockwise while others move anticlockwise. The second layer is that the buttons are not mapped to the sections. So, the first button does not move the first section, it moves the third section (suppose). These things make the installation a real reflection. The best part was when there was just one piece left and people fail to remember which switch would move what section and they end up messing it all over again.
 
We later found out the message was a bit heavy for the place and people were rather happy with virtual and augmented realities. 

My seniors Herold and Abhijith testing the thing in the lab.

<blockquote class="instagram-media" data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-12-09T05:28:37+00:00">Dec 8, 2016 at 9:28 am PST</time> को <a href="https://www.instagram.com/p/BNyN_ONFOXi/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Rohit Gupta (@rohit7gupta) posted it</a></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

Abhijith filling stones and perfecting the weight distribution. 

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32007148244/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/3/2417/32007148244_432a1b8da7_z.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Testing once again.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/32726504811/in/dateposted-public/" title="Project"><img src="https://c1.staticflickr.com/1/262/32726504811_c0cf7c870d.jpg" width="640" height="480" alt="Project"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The project was made successful by Herold, Abhijith, Chinmay, Rishabh, Salik, Silpa, Malay, me and amazing volunteers of India HCI .


Cheers,

Rohit




  

 

