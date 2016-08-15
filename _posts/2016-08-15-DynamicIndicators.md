---
layout: post
title: Making Dynamic Indicators for Ubuntu using pyGTK
image: http://www.cobhthaighceltique.com/images-python/Python-Logo.jpg
location: Bombay, India
tags:
- python
---
One day, well on a not so busy one, I will try and make my own Indicators for my *Linux* machine. Indicators in Unity Environment are a quick way to access the information or present info to the user. Things that take time like video encoding/code compiling can have a very intuitive interface with the taskbar icon which when clicked shows the progress.

For more info check [this](https://unity.ubuntu.com/projects/appindicators/) link.

<img src="https://c8.staticflickr.com/9/8884/28924622311_0d92a03741.jpg" width="380" height="46" alt="indicato">

Although good, but there is too little documentation to get you started. After a lot of explorations around the web, i was able to put together this template for building 
app indicators that exit *gracefully* and have an on click event that updates the menu dynamically. I had made it to essentially track some parameters on a remote system. So, whenever i clicked, it fetched data and presented it. A bit better than running a parallel thread even when data is not required by the user.

The basic code is [here](https://github.com/IndianTinker/DynamicIndicators) in the git repo.


Cheers!

Rohit
