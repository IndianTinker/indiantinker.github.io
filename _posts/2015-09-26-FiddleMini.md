---
layout: post
title: Fiddle Mini - The DIY 'Portable' Music System 
image: https://farm6.staticflickr.com/5829/21044805990_503b12bec5_z.jpg
location: Pune, India
tags:
- hardware
---

Music and Portability ! These guys have a pretty long relationship ever since somebody thought of listening to his favorite tunes while wasting his time travelling in a train/bus or walking on the streets and even crossing roads or riding bikes ! It started with those shoulder mounted stereo sets until music became a bit disturbing to be heard publicly and we had our first personal music system the **Sony Walkman** ! I even have a functional one from 1995. 

Quite recently we have moved on again from the personal space to a public exhibition and we have those new JBLs and BOSEs taking up the market by a storm. The headphones are becoming increasing ergonomic to wear and we even have cranium ones available. So the next time you say it feels someone's talking in my head ; It could quite well be literally taken. 

But nothing can beat the pleasure of hearing music as it amalgamates with the swish of the breeze, the chirp of the birds and the song of nature. I am probably from the clan that just dont fall in with headphones. There is a forced disconnect i believe unless people around you make insane noises that beg to be ignored or due to social niceties. So, I decided to build my own *Portable Wood Music Box* that could well play from any source on the go ! Yeah ! That means it runs off a battery.


I had this in mind ever since i made [Fiddle]({% post_url 2014-11-13-Fiddle-Music-System %}) ! The size of the speaker was too big to bring with me to Pune. 


I did a couple of attempts but the complexity of making one was too much and using the same Circuit i used on the Fiddle anyways seemed an overkill. While, i was in Mumbai earlier this year, I was searching for a handy small speaker box, so that i get an idea of the size of electronics to squeeze in. Lamington disappointed me terribly or probably i needed a better guide ?


The idea was scraped until recently I went to a local eStore to check out some stuff and noticed a portable speaker i wanted to build. It was a JBL Flip kind of thing. Did A2DP only. Sounded fine ! Costed a bomb ! INR 4000 for that ! I better make my own than falling in to these marketing gimmicks !

And yet again :

> Why buy ? When it can be built !

While making some unrelated search on eBay (gob bless their algorithm) i stumbled upon [this](http://www.ebay.in/itm/Can-Speaker-Mp3-Player-Supports-USB-Pen-Drive-Memory-Card-FM-Radio-Aux-/321874916228?hash=item4af13d7384) . This could be an ideal configuration. I was not sure about the claims though. But i made a point to buy one from Delhi which i was about to visit. It costed about the half in Delhi from the person i usually buy stuff. I got it for 200 bucks. I wonder why the form factor is like the CAN ?

Following *Dave Jone*'s words, "Dont Turn it On, Take it Apart ".. The CAN had a very loud and "high on the Higher Fs" speaker ! Connected to a PCB with handful of passives and 3 ICs. 1 for amplification ( guessing its class D probably) , 1 seems to be a microcontroller that reads the switch and plays music from sources and one seems to be a tuner chip for FM reception. The broad feature set (get ready to be BLOWN) :

* Supports USB and microSD Cards ( I have tested and found my 8GB PD doesnt work while less than 4GB works )
* Has an onboard battery , a repurposed Motorola 1150mAh battery
* Has FM with Autostore functionality that works pretty well
* Has Aux in and out
* Can be charged with a MiniUSB connector
* Has a Blue Red LED to show status. Red when charging and Blue when in use. Blinking blue when autostoring etc.
* A control button - Long Press Up increases volume,Long Press Down decreases volume, Push changes source, single up/down toggles the track. Minimal and effective 

Thats quite a value !

I then started searching on Home turf for the *Classy* form i was looking for. 

For the infrequent visitors of the place, if you enter LR from the Railway Station side, you can find a scrap market that sells off stuff that have some defect. Kind of a junk market.That's where all the gold is.I found a wooden speaker being sold for about 50 bucks a pop ! The size and the form enamoured me. It was like someone scrapped them for me. The shopkeeper who was adamant to stick one to me and was not agreeing to allow a few electrons flow down to speaker coil, so that i can make sure that everything is fine. After a few minutes he budged and got an old amp from the back and the speaker i chose was fine. All the speakers he had were forcibly severed from the back in varied proportions probably to avoid reuse. I chose the least one that can be aptly covered by the CAN speaker parts with minimal changes.

I desoldered all wires and connected my own antenna to it. Then accommodated the battery and antenna inside the wooden box. 

<blockquote class="instagram-media" data-instgrm-version="4" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://instagram.com/p/7DZwuMvUJs/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_top">A photo posted by Rohit Gupta (@rohit7gupta)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-08-31T15:42:06+00:00">Aug 31, 2015 at 8:42am PDT</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

This is what it looks before being glued and Msealed. The part is a cut out from the lower section of the CAN Speaker.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21233003405/in/dateposted-public/" title="P_20150830_232403"><img src="https://farm6.staticflickr.com/5663/21233003405_44877b817b_z.jpg" width="360" height="640" alt="P_20150830_232403"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The cut out has been oriented such that it fits the Fattest USB i have and the USB is always inside the periphery of the box to avoid accidental collision with other objects around. The control button is at the bottom for increased ergonomics and avoiding accidental operation. ON/OFF button on the top ! 

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21206733356/in/dateposted-public/" title="P_20150830_234246"><img src="https://farm6.staticflickr.com/5733/21206733356_d0dd00ff77_z.jpg" width="640" height="360" alt="P_20150830_234246"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

I next bought a collapsible handle from the hardware store and fitted it on top. Kind of serves like a makeshift dock sometimes.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21044805990/in/dateposted-public/" title="P_20150902_083120"><img src="https://farm6.staticflickr.com/5829/21044805990_503b12bec5_z.jpg" width="640" height="360" alt="P_20150902_083120"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The sound quality is pretty nice thanks to the speaker cabinet and a few extra passives added. And Bluetooth and IR also works with [TruPlay]({%post_url 2015-05-29-TruPlay %}) Project ! 

I have noticed that the plastic does look a bit disjoint. So i chamfered it using Mseal ! Matches with the overall color theme too :D 

So, when are you building one ?


Cheers !

Rohit 






