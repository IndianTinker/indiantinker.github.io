---
layout: post
title: Nooby Sentiment Analysis using nodejs
image: https://g.twimg.com/Twitter_logo_blue.png 
location: Pune, India
tags:
- iot
---

**News Flash**: Sentiments are now easy to quantify because there is soooo much data around to poke into. People eat,laugh,cry,sleep when they tweet, or maybe its the other way around.

So, we can derive loads of business and impact information based on these free streams of data and quantify them for our needs, which currently here is purely *exploratory* !

For mere instance, Lets put our favorite sport into the picture, *Cricket*! Its pretty easy to find out a quite strong co-relation between the tweets on both sides as they win or loose. Plus human emotions are what 'I' say somewhat **elastic** in nature; which means, if a person is sad due to his team losing, then after a bit of cribbing he will elastically get back to the 'played well' stance and later become a neutral subject. There maybe some exceptions.

As wiki states it:
>Sentiment analysis (also known as opinion mining) refers to the use of natural language processing, text analysis and computational linguistics to identify and extract subjective information in source materials.

Seems too complex? Well it certainly is. If you need highly credible results so that you put your million marketing Dollars into that data. It sure is. But atleast we can be a NoOb at it and explore further.

What if we break a tweet into words then rate the words for their negativity and positivity ! Then add the scores up. If the score ends up to be positive the sentence is happy and if negative , the person is sad. Seem Legit? Well Sort of, maybe 60% sort of. Such rankings can be stored in a dictionary of words. 

So that most common dictionary is called [AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) by Finn Årup Nielsen,which is a list that has words and phrases rated between +5 and -5 to quantify sentimentality. 

Now I used a nodejs package called [sentiment](https://github.com/thisandagain/sentiment) that takes in the phrase and tells you the sentiment of the phrase using the AFINN-111 dictionary.

To install it: `npm install sentiment` . Check out the README on the page for a quick start.

Next we need a twitter API Client for node, It will be [Twit](https://github.com/ttezel/twit). You will need to get the usual Outh Tokens to use this library. You will need to install Twit similarly .

The Twit returns a JSON Object for the Tweet. So, extracting that is pretty easy with the '.' operator.

With all these bits and pieces we have some code gluing left. I intent to log the data as CSV so that i can analyze it later. This requires a basic file access (write) library `fs` that already comes with the package.

For my little experiment, i would analyze prominent Indian cities for their sentiments and plot the same using Plotly later. The time was the party time when you expect people to be happy. Saturday,7th Nov and time around 10-11:30pm .

Here is the script that i ran simultaneous (2 at a time and exiting at a sample size of 500 tweets). You can replace the co-ordinates of your city using [this tool](http://boundingbox.klokantech.com/) , choose the area and select CSV, then simply copy paste it in the script.

{% gist 5e64f03beb01b3dec3dd %}

After 500 Tweets the data is as follows:
   

<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~indiantinker/61.embed"></iframe>



<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~indiantinker/57.embed"></iframe>



<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~indiantinker/53.embed"></iframe>



<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~indiantinker/55.embed"></iframe>



<iframe width="700" height="600" frameborder="0" scrolling="no" src="https://plot.ly/~indiantinker/59.embed"></iframe>

**Notable Observations** :

- Kolkata and Delhi are particularly sad
- Bengaluru>Pune>Mumbai is the way happiness goes.
- I found there are lots of twitter contest chasers as i kept on getting tons of similar tweets in Pune
- In Mumbai and Bengaluru, Tweets were mainly get togethers and parties.
- Delhi Tweet content was political and hence too much cribbing and cursing. Too bad for my home town.
- The Cricket All Stars reasonably raised the happiness levels.

I will plan to do this again in IPL, so that i can statistically establish a correlation between twitter tweets and the score cards in two cities. 


**Caveats**:

- Most of the time when tweets are not in English they end up scoring zero, i should rather translate them and then analyze
- The AFINN approach does fail sometimes, i have seen a neutral score on a feel good post quite a number of times.


Hoping to listen from some Data Gurus !

Cheers,

Rohit





 
