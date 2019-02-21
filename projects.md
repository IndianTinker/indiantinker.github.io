---
layout: page
title: Projects
---

<div class="projects">
<h3>Notable Works</h3>
<p>Works showing multidisciplinary, research-focussed approach to addressing design opportunities. I use my skills in prototyping and research to generate a negotiable and rational dialogue with the problem. The problem is usually addressed in the meantime. Projects show skills in Design Research, Creative Technology, and Interaction Design, with focus on design process</p>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'note'%}
 <div class="projectNotable">
 <a href="{{post.url}}">
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_400,h_400,c_fill,g_auto/{{post.image}}">   
 <p>
 {{post.title}}
 </p></a>
    <p class="domain">{{post.field}}</p>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>

<h3>Other Projects</h3>
<p>Over the years, I have worked with many people and on many problems. I document most of my projects carefully for archival and sharing purposes. Most projects are open-source. Feel free to explore the projects. The interesting/award-winning projects are <span class="select2">highlighted</span></p>
<div class="projects">
<h3>Design</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'design'%}
 <div class="project">
 <a href="{{post.url}}">
  {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>

<div class="projects">
<h3>Installations and Mixed Media Art</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'installation'%}
 <div class="project">
 <a href="{{post.url}}">
 {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>
<br>
<h2>Electronics and Computing</h2>
<div class="projects">
<h3>Microcontrollers</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'arduino' or tag =='msp430' or tag == 'arm' %}
 <div class="project">
 <a href="{{post.url}}">
  {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>
<div class="projects">
<h3>Embedded Linux/IOT/SDR</h3>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'rpi' or tag =='raspberrypi' or tag =='beaglebone' or tag =='sdr' or tag =='iot' %}
   <div class="project">
 <a href="{{post.url}}">
  {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
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
  {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
 </div>

	
  {% endif %}
  {% endfor %}
  {% endfor %}
</div>
<div class="projects">
<h3>Life Saving Code Chips</h3>
{% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'python' or tag=='vcsharp' %}
   <div class="project">
 <a href="{{post.url}}">
 {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
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
  {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
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
 {% if post.tags contains 'select'%}  
 <img class="select" src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">
  {% else %}  
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_fill,g_auto/{{post.image}}">   
  {% endif %}
 <p>
 {{post.title}}
 </p></a>
 </div>
	
  {% endif %}
  {% endfor %}
  {% endfor %}

</div>







