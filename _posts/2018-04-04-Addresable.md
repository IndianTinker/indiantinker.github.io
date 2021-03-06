---
layout: post
title: Repurposing mass market addressable LEDs 
image: https://i.imgur.com/121xV90.jpg
location:  IDC IIT Bombay India
tags:
- arduino 
---

> This post describes an hack that allows one to re-purpose commonly available "fighter LED strips" to work with standard Neopixel firmwares. Also, this is my first post written in VIM \m/ . I have been having a good time using it. 

Recently, I was working on a design project that required me to produce illumination in different parts of a stair step and across different stairs. The obvious answer would be to use the WS2811/2812 LED strips. But, they can be very expensive and especially very difficult to procure in bulk quantities in India. The design was capped on the cost. The budget for LEDs was max 1000. I liked the idea, it satisfied the brief but only the cost variable was pushing it down. 


It all changed on a recent trip to Pune. Pune has this power you see. I was half asleep in the bus when it stopped at the chikki corner in Lonanvala. Glancing outside with trivial expectations, I saw a "bhel corner" with Nyan cat type LEDs. I thought I was partially dreaming. I went outside and enquired. It was for real. The whole place was lit up with addressable LEDs. I looked around for signs of prosperity. None. 

On enquiring, he says these strips cost him 850 rupees. They are available everywhere. Sceptically, I thought it might as well be available in Mumbai. The conversation ended with an extended Thank You and I was back to sleep, but planning my next trip to the worst electronics market i.e. Lamington . If its that cheap, there is tons of stuff that could be done, that was earlier rejected (like pixel walls)  due to budget constraints. These thoughts kept racing. 

> Next paragraph might seem to be a rant. Skip if you wish.  

I visited Lamington post 5pm today. But yeah, I hate Lamington. Rational arguments? I am from Delhi (partially Pune). Delhi has Lajpat Rai Market. You can get tons of stuff there. Shopkeepers are there to make money. Do dhanda. Even if its Mehta, he will sell you stuff. But in Mumbai, they just shoo you away. I had to convince, Vega to give me a soldering iron bit that I saw in his poster. Thats the thing I am talking about. Let alone going inside, rummaging and getting things for you. I usually prefer ebay over lamington. LR--ebay--Abort(if unnecessary)--Lamington. The market in Delhi is very well packed together and addressable. Shops have numbers and everybody knows stuff. In Mumbai, Lamington is a hybrid Nehru Place, Wazirpur, and LR. The most useful part is just one row with switch point. Vega and Gala are Mehta's of this place.The electronics market is also quite scattered. Another important point is the lack of cross referencing. In Delhi, usually, if someone does not have anything, he will guide you to another shop. Even if you ask a random shop to help you with the list, he would help you. Here its toooo competitive. X will not tell you the name of Y. He will straight away ignore this request like a bot. " I don’t know" . There has been instances, where I got stuff just in the adjacent shop. So, its a dead end. Reload. This hampers the generation of a map of a market i usually use to plan my trips. For example, initially, It used to take me about 3-4 hours to get stuff in LR. Now, I hardly takes me an hour. Yes, I visit LR every time I am in Delhi. 

So, I got the soldering bit and went on to search for the addressable LEDs. No one is ready to understand what I am saying. I even drew a picture of it. After spending about 2 hours. I laid my guns and started back for the station. I noticed near the station an audio equipment vendor has the exact same LEDs. I, kind of, beg him to tell me where he got them. I was pointed to go to Lohar Chawl, Kalbhadevi. He advised me to take a cab to a lane there they sell light fittings. A few stores there have these LEDs. These LEDs are difficult to find here in Lamington. Bingo, I took a cab and wondered about Kalbhadevi and Chawri Bazaar. Mumbai wins here. Kalbhadevi is like a paradise. It has anything you need. Mechanical shops, good vendors and helpful people. I reached Lohar Chawl, moved around a few shops, no luck here. One final shop, I thought. I drew again and explained him what I want. He said, *"Oh! You need a fighter LED strip?"* . I said, Ok? Let me see. He showed me and my eyes were wet and I bought it irrationally without bargaining the price. The thing costed me 650 for 5m. I later found a vendor who sold it to me for 450 too. Both were identical. So, **fighter LED** is the street name for addressable LEDs. 

The default roll looked like this :
<iframe width="560" height="315" src="https://www.youtube.com/embed/h5TnJSPjE-A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

It has a WS2811 chip that drives 3 RGB 5050 LEDs per segment. 
![Imgur](https://i.imgur.com/121xV90.jpg)

The strip is powered by a 3A, 12V adapter. 
![Imgur](https://i.imgur.com/k41Rjgg.jpg?1)
![Imgur](https://i.imgur.com/IkkiIpH.jpg)

The controller is built on the strip. This is the coolest part.
![Imgur](https://i.imgur.com/lJBTUWH.jpg) 

The name etching on the controller chip was sanded off, as expected. There was a 5V Zener to regulate power to the uC with a generous capacitor. 
![Imgur](https://i.imgur.com/33AqQ71.jpg?1)

I removed 4 segments of 3 LEDs each from the end of the strip and soldered a DC jack to it.
![Imgur](https://i.imgur.com/OybKC3G.jpg)

I used the Tah board to give the strip a try. Did the usual stuff, Neopixellibrary and using 4 as LED number instead of 12 is the key here.
![Imgur](https://i.imgur.com/hJ5Dsnp.jpg)
You essentially have 4 segments. The defaults worked. The only issue is the Blue and Green commands are reversed. So, whenever the Blue command was initiated from the Arduino in Tah Avatar, the green leds were lit. 
![Imgur](https://i.imgur.com/eOczHqg.jpg)
That is a minor issue. But the best part is I have an addressable LED strip that I can program for cheap and most importantly, available in bulk. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/4fw5S28d51I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Do let me know if this was useful. I am building stuff using these LEDs now. Ok, Bye!

Cheers,

Rohit


      
