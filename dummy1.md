---
layout: page
title: Projects
---
CAD/CAM 
--------
*The latest hobby with CNC's and 3D Printing*
  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'rpi' or tag =='raspberrypi' or tag =='beaglebone' %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})  
	
  {% endif %}
  {% endfor %}
  {% endfor %}


Microcontrollers
--------
*MSP430,ARM,Arduinos,Sensors,Motors..Awesomeness*
  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'arduino' or tag =='msp430' or tag == 'arm' %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})  
	
  {% endif %}
  {% endfor %}
  {% endfor %}

Python
--------
*Python for everyday problem solving*
  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'python' %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})  
	
  {% endif %}
  {% endfor %}
  {% endfor %}

Web
----
*Mostly includes exploits with Jekyll, HTML, IOT and other web platforms*

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'blogging' or tag =='web' or tag =='internet' %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})  
	
  {% endif %}
  {% endfor %}
  {% endfor %}



Embedded Linux
--------
*Rasperry Pi, Beaglebone and stuff like that..*
  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'rpi' or tag =='raspberrypi' or tag =='beaglebone' %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})  
	
  {% endif %}
  {% endfor %}
  {% endfor %}
