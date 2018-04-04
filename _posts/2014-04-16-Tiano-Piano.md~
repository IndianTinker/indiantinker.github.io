---
layout: post
title: Tiano- The Touchscreen Piano 
tags:
- msp430
- featured 
---


Touchscreens..huh.. They are all around us..Phones ,tablets, phablets and now even laptops. Most of them have a capacitive touchscreen where the change in capacitance at a point is used to sense it and then perform the corresponding action. Capacitive ones are multi point sensing. They sense more than 2 points and hence we get those pinch to zoom features etc.

On the other hand , almost archaic version on touchscreen is the resistive version. That are pretty easy to interface with almost any microcontroller with an ADC. In this project i did over the weekend i tried to interface a touchscreen ( resistive one..) ,available at mobile repair shops in Delhi with a MSP430G2553 (Although MSP430G2231 would also do)  to make a piano.

<a href="http://indiantinker.files.wordpress.com/2013/04/touchscreen-setup.jpg"><img class="aligncenter size-full wp-image-339" alt="Touchscreen setup" src="http://indiantinker.files.wordpress.com/2013/04/touchscreen-setup.jpg" width="470" height="230" /></a>

<strong>Pre-requisites</strong>: The touchscreen may not be easier to get. I got mine from a mobile repair shop in LR. It is a 4-wire Touchscreen, pretty common with horribly thin contacts that took a lot of patience to solder.There is a lot of literature available on Touchscreens on the internet. I found two app notes that were best. First one from <a href="http://www.atmel.in/Images/doc8091.pdf" target="_blank">Atmel</a> , that explained the working of the touchsreen in a pretty clear way and one from <a href="http://www.ti.com/lit/an/slaa384a/slaa384a.pdf" target="_blank">TI</a> that some what helped in the software part.

You must read the atmel one ( atleast the first few pgs to get how it works). Its essentially a resistive voltage divider. The value of the touch point is determined by the ADC value read.

<a href="http://indiantinker.files.wordpress.com/2013/04/post1.jpg"><img class="aligncenter size-full wp-image-338" alt="formula" src="http://indiantinker.files.wordpress.com/2013/04/post1.jpg" width="470" height="264" /></a>

From the illustration above(borrowed from <a href="http://www.ti.com/lit/an/slaa384a/slaa384a.pdf" target="_blank">TI App Note</a>). One can easily see how the co-ordinates are read. In order to find out, what wire on your touch sreen corresponds to X and Y meshes. You can use a multi-meter first to measure the resistance between pins ,usually the alternate pins belong to same axes. in my case it was X-,Y-,X+,Y+  then to differentiate between x and y , one probable method will be to power the touchscreen i.e. giving the drive voltage and then find out the voltage at any other terminal w.r.t. ground and see whether is changing horizontally or vertically in your reference plane.

<em>CAUTION: Be careful about the current while powering the touchscreen externally!</em>

After this coding part is pretty simple. For the algo refer to page no.7 on the <a href="http://www.ti.com/lit/an/slaa384a/slaa384a.pdf" target="_blank">TI App Note</a>. If you plan to run your end application on a battery and you have hard-coded the co-ordinates and the Vdrive is sourced externally i suggest that you sample the Vdrive as well . If you are using  microcontroller pins to supply Vdrive then this can be neglected.

I have a desire to learn to play music but unfortunately due to my low patience levels , i have failed to keep up. :D

So, i made this Piano using the MSP430 Launchpad and a touchscreen along with a speaker. The code algo is pretty same as TI App Note Suggests and i encourage the reader to code it himself . Any difficulties can be discussed. It uses the<a href="http://indiantinker.wordpress.com/2012/11/29/tone-library-for-msp430/" target="_blank"> tone library</a> i posted earlier to generate the <a href="http://en.wikipedia.org/wiki/Solf%C3%A8ge" target="_blank">solfeggio</a>.
<h1 id="firstHeading"><span style="font-size:13px;">Here is the shaky and horrible video i made:</span><b></b></h1>

<iframe width="640" height="480" src="//www.youtube.com/embed/Aw63-2rYthY" frameborder="0" allowfullscreen></iframe>

Cheers! :D
