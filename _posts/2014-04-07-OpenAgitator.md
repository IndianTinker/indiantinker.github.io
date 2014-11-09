---
layout: post
title: Open Agitator 
image: http://indiantinker.files.wordpress.com/2013/09/dsc00520.jpg
tags:
- msp430
- featured 
---

After a somewhat woeful week at college that shook my belief in several sectors.. I mustered up my courage to realize an old project they knocked the door every time i used to Etch PCB boards. Since, the solution i use has already done close to 20 boards of small size one has to really keep shaking/stirring/Agitating the solution for a fairy long time.. ( ya 7-8 mins of man power is fairly long time :P )

The idea came to me when i visited my brother in <a title="Travelogue: Bangalore" href="http://indiantinker.wordpress.com/2013/05/24/travelogue-bangalore/" target="_blank">Bangalore</a> earlier this year. He was generous enough to give us a tour of his world class Biotechnology lab in India.. He showed us stuff and things/instruments which were difficult to pronounce in one go but they all had a thing in common- They ended with syllables like -<em>'-izer',-'ator','-ation'. </em>

One thing that they used for not allowing things/particles to sediment was called a shaker. It would be great if i could get one for myself that will take the work out of etching. When i returned i made an over-killed 3D model of the agitator that i had in mind. It would just be a 1-axis CNC with a stepper motor and belt, That was doing a lot for the task..

Here are some pics of the model:

<a href="http://indiantinker.files.wordpress.com/2013/09/etchinator2.jpg"><img class="size-full wp-image-488" alt="Looks Cool Though.. " src="http://indiantinker.files.wordpress.com/2013/09/etchinator2.jpg" width="570" height="514" /></a> Looks Cool Though..

<a href="http://indiantinker.files.wordpress.com/2013/09/etchinator1.jpg"><img class="size-full wp-image-487" alt="Freewheel mount and stepper motor" src="http://indiantinker.files.wordpress.com/2013/09/etchinator1.jpg" width="633" height="466" /></a> Freewheel mount and stepper motor

Realizing the overkill design, I went on to an easier one earlier this month ( actually previous month ) when a relative who was 'demolishing' his old PC gave me some old CDROMs that didn`t work. The mechanics did work though..

So, I just 'damaged' the tracks around the main feed motor and attached my own custom circuit based around the MSP430 micro-controller and majority of TI parts as they can be shipped to anyone  with an address making it very easy to re build yourself.

Here is a proof-of-concept video i posted a while back where the Etchinator ( now Open Agitator after i realized it could do a lot more like cooling hot milk  :D ) was etching its own control board  :

<iframe width="640" height="480" src="//www.youtube.com/embed/wOFcjrQe-is" frameborder="0" allowfullscreen></iframe>

I used a L293D H bridge motor controller to control the forward and backward movement of the cradle with an adjustable speed by giving a PWM on the Enable Pin . People who had made LFR's in the first/second year know its a child`s play.

After running the aforementioned set up for a while i noticed that  the cradle would shift to the farther end where the gear was slightly worn out. So, when loaded the cradle would :

1. Latch on to that part and stay stuck.
2. The whole system would move a bit forward each time and latch on the wrong part.

So, an end-stop detection was required which would keep the cradle in the fixed portion.. some what similar to the ones i had seen in the CNC`s which tell them their legitimate playing fields.

The answer was using the old mouse push button that came with the CD-ROM. Its softer and probably made to withstand greater number of press-cycles than a standard SPST Tactile switch.

So , now the logic would work like, whenever the button/EndStop is pressed, the direction will be reversed for a fixed time and then reversed again.. So, the cycle keeps on going.. .. .. ..

Here is the final  schematic i came up with:

<a href="http://indiantinker.files.wordpress.com/2013/09/sche.png"><img class="size-full wp-image-492" alt="Schematic" src="http://indiantinker.files.wordpress.com/2013/09/sche.png" width="700" height="482" /></a> Schematic

Since, i did'nt wanted to leave any pins un-used i included 3 LED`s which show the different states of the agitator.

The power supply needs special mention as it converts from a standard 12V DC adapter to 5V for the logic of the bridge (L293D) and again an <a href="http://www.ti.com/product/lp2950-33" target="_blank">LDO LP2950-3.3V</a> for the MSP430. The LDO can be sampled from TI and 7805 is available locally with every tinkerer.

Even the driver i.e <a href="http://www.ti.com/product/l293d" target="_blank">L293D</a> can be sourced from Ti. The brain of the device is a <a href="http://www.ti.com/product/msp430g2231" target="_blank">MSP430G2231</a> also sampled from TI and programmed from the <a href="http://www.ti.com/tool/msp-exp430g2" target="_blank">MSP430 Launchpad</a>. So, This project was indirectly sponsored by TI :D

The next came the board layout.. I designed it to have the least number of  vias (They can be a pain sometimes) while fitting at the back of the CD-ROM. Here is the one with just two vias.

<a href="http://indiantinker.files.wordpress.com/2013/09/brd.png"><img class="size-full wp-image-493" alt="Board!" src="http://indiantinker.files.wordpress.com/2013/09/brd.png" width="458" height="205" /></a> Board

Since, the position of motor/EndStop switches were flexible they eased out the routing a bit. You can also add a DC Jack to it if you like. The files are available on github <a href="https://github.com/IndianTinker/OpenAgitator" target="_blank">here</a>.

Here are pictures of the final build i managed to pull off.

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00522.jpg"><img class="size-full wp-image-497" alt="The EndStop" src="http://indiantinker.files.wordpress.com/2013/09/dsc00522.jpg" width="700" height="525" /></a> The EndStop

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00512.jpg"><img class="size-full wp-image-498" alt="Shiny Copper Board" src="http://indiantinker.files.wordpress.com/2013/09/dsc00512.jpg" width="700" height="420" /></a> Shiny Copper Board

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00515.jpg"><img class="size-full wp-image-499" alt="All in Place" src="http://indiantinker.files.wordpress.com/2013/09/dsc00515.jpg" width="700" height="444" /></a> All in Place

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00516.jpg"><img class="size-full wp-image-500" alt="Scratchy Soldering" src="http://indiantinker.files.wordpress.com/2013/09/dsc00516.jpg" width="700" height="476" /></a> Scratchy Soldering

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00517.jpg"><img class="size-full wp-image-501" alt="Power Test Complete" src="http://indiantinker.files.wordpress.com/2013/09/dsc00517.jpg" width="700" height="505" /></a> Power Test Complete

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00521.jpg"><img class="size-full wp-image-503" alt="Fixed to the back of the CDROM" src="http://indiantinker.files.wordpress.com/2013/09/dsc00521.jpg" width="700" height="525" /></a> Fixed to the back of the CDROM

The next thing that was left was to give it a sturdy base. I choose two planks of wood that were lying around. It was essential to leave it without any base on the middle section as if 'ever' there is a chemical spill that can be cleaned without unscrewing the entire assembly!

So, Here is the final build :

<a href="http://indiantinker.files.wordpress.com/2013/09/dsc00520.jpg"><img class="size-full wp-image-502" alt="Final Build" src="http://indiantinker.files.wordpress.com/2013/09/dsc00520.jpg" width="700" height="525" /></a> Final Build

You can fork the complete code and design from my<a href="https://github.com/IndianTinker/OpenAgitator" target="_blank"> github repo</a>.

Here is a video of me explaining the build.. Please ignore the following :
<ul>
	<li>Bad camera quality</li>
	<li>Some goof-ups with the IC names.. Keep an eye on the Sub Titles/Captions</li>
	<li>Background Noise (if any)</li>
</ul>

<iframe width="640" height="480" src="//www.youtube.com/embed/0nLpa1uPF_E" frameborder="0" allowfullscreen></iframe>


Hope you like it and build one for yourself..
Cheers,
IndianTinker

:D

Edit: Please vote for this project on instructables <a href="http://www.instructables.com/id/Open-Agitator-Your-Personal-Chemistry-Lab-Shaker/" target="_blank">here</a> !

See another make of my project by a reader on instructable:

<iframe width="640" height="480" src="//www.youtube.com/embed/zX0pGGTKSB0" frameborder="0" allowfullscreen></iframe>


(Thanks for sharing <a href="http://http://ales.kapun.org/" target="_blank">Aleš</a> )

<span style="line-height:1.5;"> </span>
