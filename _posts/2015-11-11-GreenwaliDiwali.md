---
layout: post
title: GreenWali Diwali:A social interactivity experiment
image: https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Raspberry_Pi_Logo.svg/810px-Raspberry_Pi_Logo.svg.png 
location: Pune, India
tags:
- rpi
- python 
---

Well we all know the catastrophic outcomes of burning crackers, its pollution (noise,material,air), killing those pigeons you probably have been feeding the whole year and nightmares for the pets. Crackers from where I see it, are a means of social exhibition to reflect your happiness about a cause. They have :

- Lights/Sound to attract attention
- A unique randomness of explosion
- An Obnoxious Odour 
- Fear of getting yourself hurt
- Fear of setting someone on fire


So, This Diwali , I decided to mimic some of the above traits without causing any pollution, so this will be a **GreenWali Diwali** .

The idea was to reiterate the experience of fire crackers by amalgamating the light,sound and randomness associated with it *electronically* .

For the installation, i used the Rasperry Pi ( as it was in my Arm's Reach :P ) and some Python to search `Twitter` for tweets that were supporting the cause for a green Diwali by tracking the hastag `#Diwali` and then parsing the tweets to check if they sounded 'Green' and if its true then a random firecracker audio file gets played on the Pi and a LED gets lit up / GPIO goes high so you can use another slave mcu to flicker some LEDs.

Yeah ! We could also do sentiment analysis of the tweet and only proceed if the tweet has a positive sentiment !

That's pretty much it. So someone else would actually be blowing the cracker in your house. Hail the Internet ! 

I would really like people to tweet with the word green and #Diwali as i have been using the installation and the only thing i see in the feeds in people retweeting a company's GreenTea advert to win some green tea this Diwali . Some of my friends like RohitKsingh did tweet. Hoping to hear more tweets. It would also be awesome if makers around the world with a Pi (in Arm's Length :P) could install/improve this in their community to raise awareness about not burning crackers.

The code is available [here](https://github.com/IndianTinker/GreenwaliDiwali). The only thing you will need are Twitter Outh Tokens.For them just  do the following :

- Sign In/Up on Twitter
- Go [here](https://apps.twitter.com/)
- Create **New Application**
- Fill the Yet-Another-Form and Create the Application.
- Now, Go to the **Keys and Access Tokens** Tab.
- You will see your consumer keys there !
- There will be a Button that generates keys so that the app can access your a/c just in case. Click and you get your secret key

These 4 keys are used for the Code above.

Then just install the dependencies based on the `README` and use your PC/Mobile to run the App on a Headless Pi. **JuiceSSH** is recommended for Android. If you wish to leave it for longer durations use `screen` to send a SSH instance in the background and exit the SSH Client.

Check out the video of me testing it !

   

<iframe width="640" height="360" src="https://www.youtube.com/embed/ZApn93KSoGY" frameborder="0" allowfullscreen></iframe>



Happy GreenWali Diwali !

Rohit





 
