---
layout: post
title: Incar Navigation
image: https://i.imgur.com/h7vR258.png
location: Tata Motors Research
tags:
- design
---

> This post describes the work done during my time at Tata Motors Research Center in Pune. I worked as an Assistant Manager in Human Machine Interface department. Here, I present my work on defining strategies to improve in-car navigation. The work was first used in Tata Tiago/Tigor.

![Imgur](https://i.imgur.com/XInwt0L.jpg)


<h4>Context</h4>
This project was done between Q2 2015- Q1 2016. Following the mobile navigation boom in India, it was observed that a lot of people used navigation in a car. Customers seem to have a behavior of pairing the audio of the phone to the infotainment and using the audio to navigate. Since road names are often not well represented in India, they still had to look at the mobile screen. This diverted their attention from the road. The need was to provide basic navigation features on the entry-level infotainment systems (Level A - now discontinued:/). The entire navigation instructions were to be rendered on the dot matrix panel. The partners were MapMyIndia, Harman, and Tata Motors. The project was challenging as the hardware resources on Level A were limited.


<h4>Work</h4>
Our work started with understanding how the system is working. We made process flows. The entire thing worked via Bluetooth on Android. Android, in general, is a heterogeneous platform. Every manufacturer tries something funny with Bluetooth. The BT stack, in general, is not very big to allow lots of information to be pushed to it. This is especially when two connections are handled by the infotainment- A2DP and SPP. The design required them to work simultaneously. The whole thing was very tight. We started by testing and defining (with whatever we could) the first use scenarios and then later moved into using the system with other infotainment functions. This activity may have been late in the whole process. After a few months of hard work, the sun was brighter again, and we moved to test, find, and fix mode. This time we found implementation bugs and UX issues with phone integration. A few more sunburns later, we have a pre-release which was rolled out to certain customers. A study was designed to understand how users get the system working and use it.  Because of such tests, the system improved and we had a month or two to perform regression testing to shape the product better. The regression testing helped find some edge cases and fix them. Until finally, before the launch, we had a working navigation system on a teeny tiny Level A system. Nobody expected that. However, the story does not end here. Even though we eased a lot of pinpoints, there could be some always. It was a trade-off or fill into Android Auto based products.



<h4>Learnings</h4>
I learned how to work on projects in which design integration is the key to match customer experience with technology and feature requests. The work involved working under technical constraints and provide the best experience. I learned how log bug reports in an easy to reproduce manner. The hybrid testing, design, and develop style was a thing, I still love. The work gave me a lot of sense of how scalable products are made in a fast-paced environment. It taught me a bit about hierarchy and how a big company works. Another thing, I learned was that design of such complex interconnected products may always have some rough edges even when in production. These rough edges or bugs are fixed over time.


<h4>How it affected the company</h4>
TML became the first company to offer navigation support to entry-level cars. Customer and media loved it, with the launch of Tiago. I have learned that since it is no longer economically viable to use the Level A system compared to other alternatives, it has been discontinued. But, I love my Level A.


**Skills** Design Integration, UI/UX, Navigation, and Testing

**Media Coverage** : [Zigwheels](https://www.zigwheels.com/reviews-advice/reviews/tata-tiago-hatchback-review/23820/#leadform)

**User Stories** : [User Uploaded - Walkthrough](https://www.youtube.com/watch?v=3Tth7RCsSjg), [User Feedback](https://www.youtube.com/watch?v=NZL3Xd5ABY0) 




  


 

