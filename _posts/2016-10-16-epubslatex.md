---
layout: post
title: Typesetting ePUBs in LaTex
image: https://c5.staticflickr.com/9/8021/28773220604_90b61a421e.jpg
tags:
- python
---

In a recent class on Typesetting we were assigned a task to typeset an entire book, preferably an Open Book, using your favorite typesetting Program in a few days time. Typesetting is not *easy* especially when you do it in **LaTeX** and with the skill going rusty it was a hot pot of dilemmas that I think should not be a part of this post at all. 

The book I choose was in ePub format and desperately needed to be converted to latex files so I can typeset them in [overleaf](http://overleaf.com/) or [sharelatex](http://sharelatex.com/) or *texworks* as a matter of fact. I have moved in the favour of these online compilers as I no longer have to fiddle with searching the included `.sty` that are so robotic to seek and use. I really wish there was some kind of package manager for latex too. Like pip for python. 
*I Wish* !

ePubs are essentially a zipped archive of `.html` files following a specific numbering scheme or format. So the task was essentially to convert the `.html` to `.tex`. I did try a few things with python trying the `beautiful soup` things. It did not taste well. I had to search other things.

I had heard of [pandoc](http://pandoc.org/) while I was writing my thesis few years back too but it *felt* to complex that time but now it was a necessity I just can't ignore. Its interesting how the perceived complexity of a act changes with necessity. **Pandoc** is the Swiss army knife when handling documents. It can do anything. It took me a while to figure out it was a CLI tool. ( It happens )

It could translate the html page *almost* perfectly to be used in *overleaf*. Only some italics were not getting done properly for which I used `sed` and compiled it all in a shell script to iterate over the entire folder and in a blink I had a directory full of tex files ready for the next stage. 

The work was only 10% done as a lot of widows needed new husbands and orphans needed parents, I hope you get what I mean ! 

Just in case you too are a fan of **LaTeX** , the code I used and wrote is [here](https://github.com/IndianTinker/EPUB-to-Latex).

>Long Live LaTeX !

Cheers,


Rohit


