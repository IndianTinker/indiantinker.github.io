---
layout: page
title: Writings
---
My thoughts about the places i go and people i meet, things I think about ! 

  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% if tag == 'travel' or tag =='travelogue' or tag =='Travel'or tag =='travel'or tag =='writing' %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})  
	
  {% endif %}
  {% endfor %}
  {% endfor %}
