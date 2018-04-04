---
layout: post
title: 	SpectraVUlizer- Lights,Music and Magic
image: http://res.cloudinary.com/indiantinker/image/fetch/w_200,h_200,c_crop,g_auto/https://farm6.staticflickr.com/5725/23863818761_d3c884844d_z.jpg
location: Doo Things, Pune, India
tags:
- arduino
---

One day while chatting with my good friend [Rituparna](https://twitter.com/mrrituparna) we stumbled upon building a sound reactive light for Ritu's Ritz Car. Amplitude based light would be too stale for his taste and we needed something that was more *dhinchaak*. So why not visualize music in the frequency domain as well. So, as the sound changes bands we could change the color of his car's interiors.

Hence we would certainly have to do some FFT so we have an idea of the relative amplitude of sound in different bands and then use the Neo Pixel strips to visualize the pattern. We planned to use the [Tah](http://tah.io/) as our number cruncher of choice.

One fine afternoon we met at [doo Things](http://www.meetup.com/Doo-Things/) to get the project up and running. We decided to use the [MSGEQ7](https://www.sparkfun.com/datasheets/Components/General/MSGEQ7.pdf) which is a Seven Band Graphic Equalizer and produces analog voltages of the value of signal in a particular band. Its not difficult to interface and would help us update the strip real-time which could be difficult with software FFTs. Also it was directly capable of receiving signal from the standard 3.5mm line saving us with effort to make an amplifier if we used the standard FFT libraries.
Reading it is similar to how you read a shift register.

We followed the standard circuit from the datasheet and programmed the **Tah** to read the signal and reflect the same on the neo-pixels. The whole circuit was built on a perfboard and powered by a standard 5V Adapter.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/23863820191/in/dateposted-public/" title="WP_20150321_004"><img src="https://farm2.staticflickr.com/1523/23863820191_63d67d6a73_z.jpg" width="640" height="359" alt="WP_20150321_004"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/23863818761/in/dateposted-public/" title="WP_20150321_006"><img src="https://farm6.staticflickr.com/5725/23863818761_d3c884844d_z.jpg" width="640" height="359" alt="WP_20150321_006"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

The test code we used is as follows:

{% highlight C++ %}


/*
Released under MIT License
A project by Rituparna and Rohit
*/


#include <Adafruit_NeoPixel.h>
#define NEOPIXELPIN 4

Adafruit_NeoPixel strip = Adafruit_NeoPixel(144, NEOPIXELPIN, NEO_GRB + NEO_KHZ800);

const int analogPin = A0;
const int strobePin = 2;
const int resetPin = 3;

int spectrumValue[7]; // to hold a2d values
int doubledSpectrumValue[13];
int avg = 0;


void setup()
{
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  
  pinMode(analogPin, INPUT);
  pinMode(strobePin, OUTPUT);
  pinMode(resetPin, OUTPUT);
  analogReference(DEFAULT);
  
  digitalWrite(resetPin, LOW);
  digitalWrite(strobePin, HIGH);
}

void loop()
{
  digitalWrite(resetPin, HIGH);
  digitalWrite(resetPin, LOW);
 
  //Measure the magnitudes of the 7 frequency bins
  avg = 0;
  for (int i = 0; i < 4; i++)
{
    digitalWrite(strobePin, LOW);
    delayMicroseconds(30); // to allow the output to settle
    spectrumValue[i] = analogRead(analogPin);
    avg += spectrumValue[i];
    digitalWrite(strobePin, HIGH);
}


  avg = avg/7;

  //Clear out the NeoPixel String
  for(int i = 0; i < 144; i++){
    strip.setPixelColor(i, strip.Color(0, 0, 0));
  }
  
  //Draw the meter on the NeoPixel string
  for(int i = 0; i < map(avg, 0, 500, 0, 144); i++){
        strip.setPixelColor(i, strip.Color(i*4, 60 - i, map(spectrumValue[0], 0, 1023, 0, 60))); //Added blue flash for bass hit
  }
  
  strip.setBrightness(125);
  strip.show();
}


{% endhighlight %}

<p>
So basically when we notice a higher value in the lowest band which is basically due to the percussion instruments used in the song. We make the whole strip flash. Check this out in the video below.
</p>
<iframe width="640" height="360" src="https://www.youtube.com/embed/xV4zOYUQKfM" frameborder="0" allowfullscreen></iframe>



The song is by Adiba Parveen just in case you like it. Its [here](https://www.youtube.com/watch?v=h0EoMozYWSs).




Cheers,

Rohit







 
