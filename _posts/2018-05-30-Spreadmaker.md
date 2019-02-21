---
layout: post
title: Spreadmaker- A tool to generate spreads for hand binding 
image: https://images.freeimages.com/images/large-previews/76e/book-with-white-pages-1507326.jpg
location:  IDC IIT Bombay India
tags:
- python

---

> The post describes a handy python script to convert usual pdfs into spreads of 8. The printed pdf can be bound by hand. 

Thanks to my project guide, [Prof. Girish](http://www.idc.iitb.ac.in/~girish/index_mr.html), who inspired me to write this by asking me to read more stuff.

During my project days (and even now), I used to print papers from several journals to read and reflect upon. The tangibility of paper provides a far better reading experience than e-books. I have given up on e-reading as it strains my eyes, difficult to make notes on side and record keeping is difficult. If something is more than 25 pages, I usually print it and read it. But I do try to save as much as paper possible.

The common way to <!--more-->save paper was to print two pages on one sheet. But the manner in which the pages came out was very cumbersome to handle and did not give much joy while reading. While printing one of my favorite journals, [Mind and machines](https://link.springer.com/journal/11023), I came up with an idea of making a script that would convert the pdf by re-arranging the pages to form an 8-page booklet. This booklet could later be bound into a book. 

The art of bookbinding had already enticed me and I was binding my own books for almost a semester then (and now too). So, It would be easier to bind them using [kettle stitch technique](https://www.youtube.com/watch?v=9O4kFTOEh6k&t=334s) and I might end up having a readable journal/book.
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BPSDTUhlEm0/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BPSDTUhlEm0/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Rohit Gupta (@rohit7gupta)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-01-15T10:42:20+00:00">Jan 15, 2017 at 2:42am PST</time></p></div></blockquote>
<script async defer src="//www.instagram.com/embed.js"></script>
    
To prototype the script, I divided an A4 sheet into 4 parts and then folded them half. Then I numbered the pages as they usually are when you print them like two pages on one sheet. Next, I made a booklet out of the same and wrote the new page numbers as they should be for the booklet. 

Some mathematical induction and we had a simple formula to make a 4 spread, 16-page block. Then, to generate the complete book, one has to add some blank pages to complete the 16-page blocks..

That is pretty much it. I have tested it at least 10 times and printed close to 1000 pages. It works. The script is available [here](https://github.com/IndianTinker/spreadmaker).

**How to use it**

Clone the [git repo](https://github.com/IndianTinker/spreadmaker). Make sure you have the dependencies 'pip'ed like pyPDF2. Try doing `pip install pyPDF2` to install it.

Then paste the pdf you wish to convert in the repo folder. Rename it as *in.pdf* and then run the script from the terminal using `sudo python spreadmaker.py` . You should have an `out_final.pdf`. That the file. Delete the other `out.pdf` file. You can print the pages in two on one style and then grab the top 4 and fold it in half. You should see the numbers falling in place. Then bind it using the kettle stitch method.


**Future Improvements**

The script is 'hacky'. Some obvious improvements are:

- GUI to do the same
- Not using the interim `out.pdf` file. 
- Using file at any location.
- Add custom blank pages to maintain pdf odd-even page formatting.
- A PDF preview
- Scaling option to zoom in dense books/journals
- Allowing the operation of encrypted files.

I know this may be achievable using pdf software like acrobat. But since, I am on Linux, I seem to have no better option than to write one snippet for myself. Plus its lot of fun. 

Hoping that someone finds it useful.


Cheers,

Rohit


      
