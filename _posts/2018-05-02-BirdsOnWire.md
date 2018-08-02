---
layout: post
title: Birds on a Wire
image: https://i.imgur.com/GqnA3LV.jpg
location:  IDC IIT Bombay India
tags:
- installation
---

> This post presents my work on creating an interactive musical installation called "Birds on wire" .It tries to explore the gap between the physical and digital. The work was done as a part of my TA duties under Prof. Ravi at IDC. 

The idea came from seeing crows sitting on electric transmission lines or cloth drying wires. There is so much man-made symmetry in wires and  natural randomness in the movement of the crows. But we never 'interact' with these crows. We just shoo them away. Through this work, we wanted to bring the attention of the crowds to the subtleties of these crows and allow them to make music with them. Imagine the wires as strings from the guitar. :)

The installation allows users to tease virtual birds sitting on a series of wires and create music in the process. The music reflects the mood of the birds.  

The architecture of the system was as shown. We had tried several approaches like minim, sound fonts and other ways of generating sound (but not ChuCK). The reason to choose SFML was due to the audio being mastered as loops by a "renowned" audio designer for each wire separately. So, the need was to play all of them in sync to make an ensemble of instruments that sound great together. We tried to manipulate the gains of each stream based on user's interaction.
![Imgur](https://i.imgur.com/IezoWLL.jpg)

I fabricated the capacitive sensors and the frame in the size of a large TV. 
![Imgur](https://i.imgur.com/kSOxaV1.jpg)
![Imgur](https://i.imgur.com/x3dZikv.jpg)
![Imgur](https://i.imgur.com/Qi0ZRVm.jpg)
![Imgur](https://i.imgur.com/GqnA3LV.jpg)

In the final installation, we had processing handling the beautiful animations (rendered using sprite-sheets) by Vajra and Pranisha. The processing program communicates with a custom audio server written in python over telnet/OSC. One of the pre-final tests in shown in the below video. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/6U5nH8ukDLM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The final video, unfortunately, cannot be released at the moment. 

I had lots of fun working on the project. We experimented with tons of approaches. This was one of the earliest projects, I had done with Prof. Ravi and team. I learnt a lot about working at the intersection of design and technology. The ways of communicating with artists are things, I often recollect from this project. It taught me a great deal about system networking too. 

Cheers,

Rohit


      
