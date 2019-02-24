---
layout: page
title: About
---


नमस्ते/ Hello/ 你好/ ¡Hola!
I am Rohit !
![Imgur](https://i.imgur.com/r9A1hDf.jpg?1)

A curious designer and doer who belives in the power of design to generate discussions about the present and probable. I try to approach design as a dialogue with problems and not mediums. I am fan of philosophy to explain modern condition and expand thinking. Guess my favourite philosophers?


Into DIY, languages, research, cycling, reflective behaviours, speculation, and emotions. My favourite objects are maps, mirrors, and clocks. I have built things from matchsticks to solar cars. 


I am currently with the Digital Design Lab, Istituto Europeo di Design, Madrid working on projects around communities and affective environments.


<div class="notice"> I am looking for opportunities and would love to work in an research driven environment of constant, critical, and ethical innovation. Yes, I am on <a href="https://www.linkedin.com/in/rohit7gupta/">linkedIn</a> and I have a 
<a href="https://drive.google.com/file/d/1GaqacFfjorQOB_gpMPO-650BDWWgY04t/view?usp=sharing">C.V.</a> too !

 <figure>
<img src="https://media.giphy.com/media/An95xQZRS1B1S/giphy.gif" alt="Twin peaks">
</figure> 


</div>

My projects and skills can be visualized as below. 

<div id="chart"></div>

If you are around, hit me up on twitter (@rohit7gupta) or check my CV for more contact information. Let us meet up and talk, I know a few good places :) 


> About this website: This website is made using jekyll with some need specific plugins I wrote like location, open graph support, contextual photo crop, and others. If you noticed, the font is Nunito. I love it for its semi-serious feel. It is not too sharp and not at all comic. It resonates with me. I tried following good typography rules and use relative spacing. The website is mobile friendly. It is [88% greener](https://www.websitecarbon.com/website/rohitg-in/) in terms of environmental impact. The website is designed to follow many Web Accessibility Guidelines. 

<script src="https://cdnjs.cloudflare.com/ajax/libs/frappe-charts/1.1.0/frappe-charts.min.iife.js"></script>


<script>
let chart = new frappe.Chart( "#chart", { // or DOM element
    data: {
      labels: ["Game/Toy Design", "Interaction Design", "Design Research", "Creative Technology",
      "Speculative Design", "Engineering", "Project Management", "Maps and GeoViz"],

      datasets: [
        {
          name: "Number of projects done", chartType: 'bar',
          values: [6, 13, 8, 9, 2, 7, 3, 7]
        }
      ],

    },
  
 barOptions: {
    spaceRatio: 0.1 // default: 1
    
},
  

    title: "Project breakup based on skills",
    type: 'bar', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['purple', '#ffa3ef', 'light-blue'],
    valuesOverPoints: 1,
    tooltipOptions: {
      formatTooltipX: d => (d + '<br>').toUpperCase(),
      formatTooltipY: d => d + ' projects',
    }
  });

</script>


