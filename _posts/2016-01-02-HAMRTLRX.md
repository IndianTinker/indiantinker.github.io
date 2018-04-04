---
layout: post
title: Doormate- Runner's Up at Intel IOT Roadshow
image: http://www.rapidio.org/wp-content/uploads/2015/07/intel_rgb_30001.png
location: Pune, India
tags:
- rpi
---

Remember guys we participated in the Intel IOT Hackathon, Pune ? Well here is the live blog [link]({% post_url 2015-08-01-Intel %}) that details the entire event in a live blog i wrote. I thought i would write a blogpost explaining what we did. 

Basically, our Project was called the **Doormate**. It is what will make your doors awesome. The main idea was to never allow a person miss the events around his door like missed visitors and failed deliveries. Along with this, it will help courier companies to adopt a less intrusive way to find what buyers are not at home before hand so that they do not waste time ringing bells and waiting for an answer. There is also scope for an extensive API that could trigger events like opening a small entry to accept the parcel if authenticated properly.

The project uses the **Intel edison** and was built using whatever parts we could rummage at the event. 

The device has an occupancy indicator that can be set by the user using several source, both tangible and intangible. Based on this occupancy status the device behaves in the desired way. Like in the demonstration below, if the user is not present , The bell would play an automated message asking the visitor to call a number and at the same time send a notification to the user , that he has a missed visitor. The bell does not have the using ting tong or rings, but the user can customise it based on his needs aka *The Bell Playlist* .

The bell also has a couple of sensors that allow the user to monitor any gas leaks or other events from his comfort zone as each bell has its own dashboard website. The website provides useful analytics about the footmat use and bell presses which may be more useful in a more commercial setting like a shop.The footmat also encourages the visitors to wipe their feet by being interactive and if he wipes his feet about 3 times then the beloved *Mogambo* feels good and the door opens. (See video below to understand the context)

Here is what the dashboard [looks like](http://doormate.github.io/website/).  

The entire project was made using bare-bones linux and python as we missed the part where the Intel Representatives were explaining their amazing and limitless tool chain. Check out the video below explaining the project in detail:

 
<iframe width="640" height="360" src="https://www.youtube.com/embed/su8k2AwtbH0" frameborder="0" allowfullscreen></iframe>


Cheers !!

Rohit 







 
