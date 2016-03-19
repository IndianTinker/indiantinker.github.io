---
layout: page
title: Projects
---
<div class="projects">

<h3>Microcontrollers</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'arduino' or tag =='msp430' or tag == 'arm' %}
 <div class="project">
 <a href="{{post.url}}">
 <img src="{{post.image}}" width="270"></a>
 <p>
 {{post.title}}
 </p>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>

<div class="projects">
<h3>General Electronics</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'hardware' %}
   <div class="project">
 <a href="{{post.url}}">
 <img src="{{post.image}}" width="270"></a>
 <p>
 {{post.title}}
 </p>
 </div>

	
  {% endif %}
  {% endfor %}
  {% endfor %}
</div>
<div class="projects">
<h3>Python/Visual C Sharp</h3>
{% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'python' or tag=='vcsharp' %}
   <div class="project">
 <a href="{{post.url}}">
 <img src="{{post.image}}" width="270"></a>
 <p>
 {{post.title}}
 </p>
 </div>

	
  {% endif %}
  {% endfor %}
  {% endfor %}
</div>

<div class="projects">
<h3>Blogging</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'blogging' or tag =='web' or tag =='internet' %}
   <div class="project">
 <a href="{{post.url}}">
 <img src="{{post.image}}" width="270"></a>
 <p>
 {{post.title}}
 </p>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>


<div class="projects">
<h3>CAD/CAM</h3> 

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'CAD' or tag =='CNC' or tag =='3dprinters' %}
   <div class="project">
 <a href="{{post.url}}">
 <img src="{{post.image}}" width="270"></a>
 <p>
 {{post.title}}
 </p>
 </div>
	
  {% endif %}
  {% endfor %}
  {% endfor %}

</div>

<div class="projects">
<h3>Embedded Linux/IOT/SDR/Misc</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'rpi' or tag =='raspberrypi' or tag =='beaglebone' or tag =='sdr' or tag =='iot' %}
   <div class="project">
 <a href="{{post.url}}">
 <img src="{{post.image}}" width="270"></a>
 <p>
 {{post.title}}
 </p>
 </div>
	
  {% endif %}
  {% endfor %}
  {% endfor %}
</div>





