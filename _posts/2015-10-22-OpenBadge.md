---
layout: post
title: Open Badge:You'da Maker
image: https://farm1.staticflickr.com/575/20736053114_bf0ed32bef_z.jpg 
location: Pune, India
tags:
- msp430
---
 
Badges are amazing things. Better when you make your own. I was about to attend the 1st MakerFest at NID, Ahmedabad and thought of taking something unique to the event. Badge was a great option and suited the maker theme of the event. So, sitting down with a pen and paper i drew what it would look like and came up something that could be retro-fitted to a usual boring office badge and would have a LED array to display text messages , the obvious a rechargeable battery ,light weight and of course infinitely hackable, just in-case people wish to remake it, which seldom is the case.

For the LED array we could use the usual LED Matrix,5x7 seemed to be a good size comfortable for both the pins and programmer.But..

The LED Matrix available in stores nearby had a lot of issues: 

- Profile was too thick
- The sizes available were either too big or too small for a 5x7 size.
- Came with no datasheet, which meant bull work required to find out all the R and C values. Dahh!

So, I had to make a **tough** choice of soldering 35 LEDs which meant the PCB was going to be *Dou.Double Sided* (Literal stammering). I had never done double sided at home. But it was never too late and that difficult. **Basically** you have to align two sides and just slip in the copper clad , tape it , iron it and  etch it and then *Hope is all you need* !

FYI, that 'basically' came after i spoilt one full PCB. 

> PRO-TIP: You can have some alignment marks out of the scope of PCB in different directions in the dimension layer. Now when you align the front and back you just align the marks. Check this [instructable](http://www.instructables.com/id/Two-sided-PCB-using-toner-method/) i used as a reference.

The major elements on the PCB were:

- LED Matrix
- A MSP430G2553 microcontroller brain
- A ULN2803 Darlington Driver to sink the current
- A USB connector to charge the battery
- A SBW connector to program the MSP430
- A Switch to change the message
- A Li-Ion battery from a Discarded Phone
- Current limiting and Pull up resistors
- Decoupling Capacitors
- A REG1117 Regulator for MSP430

Schematics and PCBs took 3 days of part-time work. Etching,Drilling and Soldering took a nighter.I had a provision to use the PCB directly as the badge with two big drill holes on the top.

Check out the images below: 

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/20736425093/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm6.staticflickr.com/5823/20736425093_7349c070f7_z.jpg" width="359" height="640" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> 

 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21346949492/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm1.staticflickr.com/737/21346949492_c5295449cb_z.jpg" width="359" height="640" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>


<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/20736678943/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm6.staticflickr.com/5800/20736678943_11ac529978_z.jpg" width="640" height="359" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21365927401/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm1.staticflickr.com/612/21365927401_052a3bfdef_z.jpg" width="640" height="359" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/20736053114/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm1.staticflickr.com/575/20736053114_bf0ed32bef_z.jpg" width="640" height="359" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>


<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21171876949/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm1.staticflickr.com/676/21171876949_394ce34d21_z.jpg" width="640" height="359" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>


<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21169357760/in/dateposted-public/" title="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."><img src="https://farm1.staticflickr.com/568/21169357760_4dc214b3f0_z.jpg" width="640" height="359" alt="MakerBadge  A LED badge that stores custom messages that can be changed at a press of a button. USB Charged and Easy to make. Powered by a LiIon Battery."></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

After experimenting with readability, i found out that the display was a dud in bright light. So, i repurposed an already cut-out heart shaped Red Diffuser for the display. It was a game changer.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/21510455275/in/dateposted-public/" title="P_20150917_110935"><img src="https://farm1.staticflickr.com/567/21510455275_37e0e33463_z.jpg" width="360" height="640" alt="P_20150917_110935"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The basic code is available [here](https://github.com/IndianTinker/OpenBadge) for people who wish to build it.
The final version could do:

- 5 Strings scrolling
- Temperature Display (MSP430s have a temperature sensor in-built)
- Static Display

Things that the hardware allowed but i didnt get the time to program:

- Battery state sensing
- Animations

When i showed it to [@anool](https://twitter.com/anool) at Maker Fest, he liked it and gave me a [BadgEr](http://wyolum.com/projects/badger/) which was even cooler.

Please check out the video below:

<iframe width="480" height="360" src="https://www.youtube.com/embed/KU9X9qTaQvg" frameborder="0" allowfullscreen></iframe>



Cheers !!

Rohit 







 
