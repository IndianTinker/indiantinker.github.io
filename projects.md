---
layout: page
title: Projects
---
<h3>Notable Works</h3>
<div class="projects">

<p>Works showing multidisciplinary, research-focussed approach to addressing design opportunities. I use my skills in prototyping and research to generate a negotiable and rational dialogue with the problem. The problem is usually addressed in the meantime. Projects show skills in Design Research, Creative Technology, and Interaction Design, with focus on design process</p>

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'note'%}
 <div class="projectNotable">
 <a href="{{post.url}}">
 <img src="http://res.cloudinary.com/indiantinker/image/fetch/w_400,h_400,c_fill,g_auto/{{post.image}}" class="preview">   
 <p>
 {{post.title}}
 </p></a>
    <p class="domain">{{post.field}}</p>
 </div>

  {% endif %}
  {% endfor %}
  {% endfor %}
</div>

<hr>
Interested in seeing more projects? Check out some of my other works [here](/otherProjects).
