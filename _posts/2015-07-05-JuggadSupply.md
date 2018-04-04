---
layout: post
title: Juggad Supply- Saving a power supply from planned obsolescence 
image: https://c1.staticflickr.com/1/354/19429714392_4a600b79fd_z.jpg
location: Delhi, India
tags:
- hardware
---

Next time your printer stops printing for no reason or changing the battery of your MP3 Player from **Authorised Service Station** costs a major percentage of the original cost, Be informed this all is a part of an industrial design policy,Planned Obsolescence, to make goods last a bit shorter by tweaking the design. 

Never mind a broken device is an opportunity to learn. That's what i had in mind when i didnt throw away my 2004 ATX supply when it failed in 2010 probably due to some connection/connector issue. In a haste to get the PC working in summer break I installed a new supply on the PC and kept it with me to play with later.

After saving it from the routine disposal drives of Diwali , I finally had some use of it when the WalWart 12V@1A supply i have was not capable of driving the stepper motors i used in my major project.

Moding ATX to use it as a bench supply is not new.The power output is pretty stable and can provide high currents. DP has an amazing [ATX to Power supply Board](http://dangerousprototypes.com/2012/06/28/new-prototype-atx-breakout-board/) too.

I wanted one that i could carry around anywhere and should be in one piece and durable with no wires outside the case except the power cable of course . 

Lets see how that ATX Connector looks like.

<center>
<img src="http://etech.dyndns.org/images/vcr/atx.jpg">
</center>

The important points are:

- Shorting `PS_ON(14)` to `GND` will turn on the PSU and that is what actually the motherboard does.
- By checking the voltage on `Power_ok or Power Good(8)` one can decide whether the power supply OUTPUT is ON (+5V when ON).
- By checking the voltage on `+5vSB(9)` one can decide whether the Mains are ON or not (+5v when ON).

So, I will connect LEDs to pin 8 and 9 and a switch between 14 and GND, thats pretty much it.

Since I had the no wires outside clause and usual power supplies have more that one connector, I had to open the power supply and cut wires literally like a barber and then solder the same coloured ones together to bring them onto the front panel.

<a href="https://www.flickr.com/photos/94411929@N06/19435985395" title="Same Colour ,Same Voltage by Rohit Gupta, on Flickr"><img src="https://c1.staticflickr.com/1/469/19435985395_e8dde8d935_z.jpg" width="640" height="480" alt="Same Colour ,Same Voltage"></a>

> Most morden ATXs don't need the load resistor on 5V bus as many posts mention. Phew ! One part less :D 

I then drilled the holes @ CEDT for the Thumb Screw connectors i got from Lajpat Rai and also fixed a small handle to it for carrying it around.

<a href="https://www.flickr.com/photos/94411929@N06/19248429460" title="Drilling the cover by Rohit Gupta, on Flickr"><img src="https://c1.staticflickr.com/1/523/19248429460_bc1a02963b_z.jpg" width="640" height="480" alt="Drilling the cover"></a>

Then connected the circuit as mentioned above to test it.

<a href="https://www.flickr.com/photos/94411929@N06/19429707752" title="Testing by Rohit Gupta, on Flickr"><img src="https://c1.staticflickr.com/1/302/19429707752_05839665a2_z.jpg" width="640" height="475" alt="Testing"></a>

Carefully packed everything inside the original case.

<a href="https://www.flickr.com/photos/94411929@N06/19429714392" title="Ready ! by Rohit Gupta, on Flickr"><img src="https://c1.staticflickr.com/1/354/19429714392_4a600b79fd_z.jpg" width="640" height="480" alt="Ready !"></a>


Printed some labels from my archaic inkjet and I had my ATX power Supply ready !

<a href="https://www.flickr.com/photos/94411929@N06/19435982985" title="Labelled UP by Rohit Gupta, on Flickr"><img src="https://c1.staticflickr.com/1/317/19435982985_69fc1b1b18_z.jpg" width="640" height="480" alt="Labelled UP"></a>

Pretty simple and effective hack ! So, when are you making one ? 


Cheers,

Rohit 








