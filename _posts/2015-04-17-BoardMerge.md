---
layout: post
title: BoardMerge- The command line single page PDF merge utility for PCBs 
image: https://farm8.staticflickr.com/7587/17151890736_ee2f94d772_z.jpg
location: Pune, India
tags:
- python
---

Toner Transfer Method.. is no doubt sheer Awesomeness. With just a few steps you can have your prototype in your hands without waiting for weeks for the fab house to deliver. Certainly relieves me of a lot of anxiety. I even made this [Open Agitator](http://rohitg.in/2014/04/07/OpenAgitator/) a while back to help me ease out the etching process.

I usually (used to) print my designs on the glossy photopaper near my college where there is a usual hub of shops catering to student needs. Carrying the photopapers from my house to the college in the crowded metro would often crumble them. I preferred buying them from the local stationary shops near the college itself who would sell it at varying prices anachronistically.

The shop used to charge for a round of paper into the printer (actually one print) and if i printed multiple on the same sheet, if was charged more. As students we *should* cut costs. Further the *several-times-on-a-page* approach had more issues:

- Printing on a sheet many times causes it to blacken due to the unhealthy state of drum on public printers
- The shop keeper usually charges for a single round in the printer and printing many times added to the costs.
- I had to always mark the point for the orientation of the print, else if the print goes the other way again, i can have the next file printed on the previous file , rendering the entire excercise useless. Actually that has happened twice :)
- You also need to set the no scaling option in *Acrobat* again and again.. duh..

Thats too much work specially after waiting in a queue to get to the printer !

I actually never thought of getting out of this circle for a while until the last few semesters, which were less academically demanding. I then wrote a small python script to combine all the pages that i used to print seperately to a **Single** page and then go and just print one pdf. No worries about messing up the orientation/scaling etc..

Well.. Why python when i could have used any photo-editing tool? Its simpler and automatic and I had once messed around the scale on a photo-editing tool and had to *re-etch (just imagine)* a whole board.

**The Process**

1. Like usual ways instead of directly printing files to printer, print them to pdf and choose different locations like center, top, left etc or you may also manually do that using the margins.Make sure that they dont overlap.

2. This way you will have many pdfs on the same folder. Now:
`git clone https://github.com/IndianTinker/BoardMerge.git`  or download from [here](https://github.com/IndianTinker/BoardMerge)

3. You need to install pyPDF dependency. PIP is the boss here!
`sudo pip install pypdf`

4. Now paste the `merge.py` in the active eagle folder and run :
`python merge.py file1.pdf file2.pdf .. .. ..` 

5. Wait till it gets completed and you shall see a file `Combine.pdf` with all the pdfs on a single page!

This a directory full of 17 pdfs !

<a href="https://www.flickr.com/photos/94411929@N06/16557649863" title="before by Rohit Gupta, on Flickr"><img src="https://farm9.staticflickr.com/8693/16557649863_6f433269af_z.jpg" width="640" height="402" alt="before"></a>

After some python-fu you get this:

<a href="https://www.flickr.com/photos/94411929@N06/17151890736" title="final by Rohit Gupta, on Flickr"><img src="https://farm8.staticflickr.com/7587/17151890736_ee2f94d772_z.jpg" width="640" height="366" alt="final"></a>


Hoping that fellow makers find it useful.

Cheers!

Rohit





 
