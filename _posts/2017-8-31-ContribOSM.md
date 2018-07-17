---
layout: post
title:  Contributing to OSM using JOSM
image: https://c1.staticflickr.com/3/2906/33678280611_41bbeede72.jpg
location:  IDC IIT Bombay India
tags:
- writing
---

> This post is meant to document to process of uploading data points gathered as a part of [Interactive Data Viz](https://info-design-lab.github.io/) course at IDC taught by Prof. Venkat.

Goal
-----
The aim of the exercise was to experience the process of collecting, analyzing and contributing data points to [openstreetmaps](https://www.openstreetmap.org). This would allow the class to cperform a **data mash-up**. A data mash-up happens when a lot of data on various things is presented on a common -graphical- medium like maps. Data mash-ups can help us draw insights and suggest causality for certain occurrences. Through our experience, we learned that the density of data for a mash-up should be very high to draw interesting inferences.


Data Collection
---------------

There are several ways to collect data:

- **Manual method** : It involves taking a printout of your area under exploration using [Field papers](http://fieldpapers.org/) and then once in the field, one marks places on the map. These positions are then manually plotted on the OSM map using their online editors or JOSM. The drawback of this methods is the accuracy. Since, the marking is relative, missile accuracy is often difficult to achieve. The advantage is that it allows more freedom and can work without phones. Hence, if a mapathon is organized then it would be better to use such a method that reduces the dependency on phones. There could be a specific group of people who would collect these sheets and mark these points on OSM later. Thanks for the tip, [Rasagy](https://www.mapbox.com/about/team/rasagy-sharma/).
- **Apps** : There are several Apps for *Android*. The goal is to essentially get a KML file. Most people used [Google MyMaps](https://play.google.com/store/apps/details?id=com.google.android.apps.m4b&hl=en). Other options are [SWMaps](https://play.google.com/store/apps/details?id=np.com.softwel.swmaps&hl=en) and [Maps.me](https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro&hl=en). iPhone users can use the web version of Google MyMaps and plot the data manually on it. It gets stored in gDrive. Then export the kml out of gDrive. This method was followed by Shilpa. If anyone knows of a better way, please be sure to suggest.

In conclusion, I think if the data is less (< 20 points say) and precision is not required, then field paper method would be faster. This reduces the time wasted in converting formats. The data can then be replicated on the map using [iD](http://wiki.openstreetmap.org/wiki/ID) or [Potlatch2](http://wiki.openstreetmap.org/wiki/Potlatch_2)(Flash alert!!). These editors are available online and many of my classmates with less number of points used them.


For a larger number of points we will proceed with JOSM method.

Post Data Collection
---------------------

**Preparing data**

Once you have your data points in KML or CSV or geoJson. You can proceed with the following process. It is advisable to have a geoJson file. It helps in running vizualization when using Mapbox. Helpful tools are :

- [KML/GPX to geoJson](https://mapbox.github.io/togeojson/)
- [geoJson to CSV](http://geojson.io)

The process I followed was KML --> CSV -->geoJson

**Icons and OSM features**

Like Mapbox's Maki icons, OSM also has its own set of icons. They can be rendered on the map when you choose specific tags. The list of tags are mentioned [here](http://wiki.openstreetmap.org/wiki/Map_Features). The icons column on the page shows the icons that will be shown on the map. For example : I chose to map sitting places in IIT Campus. The most semantically suitable choice was of a bench. I used the 'field' as 'amenity' and value as 'bench'. You can choose appropriately. The features can be added to the points using the CSV file. Once you have the CSV file you can add a new 'column' as amenity (in my case) using your favorite spreadsheet software. Now, in every 'row' i.e. for each data point add the value. This would be 'bench' in my case. You can have additional fields as well. It is preffered not to have spaces in between the words of the field. Use an '_' .

Once this is done, you should have a dataset in csv we can proceed to map them on OSM. As an additional step, I also generate a geoJSON file.

Rasagy suggested some *pro-tips* like :

- [Tagging for the renderer](http://wiki.openstreetmap.org/wiki/Tagging_for_the_renderer): The point is to collect the data and not have icons marked on the map. As many features might not have icons for them, it is suggested to mark real data.

- [One feature, one element](http://wiki.openstreetmap.org/wiki/One_feature,_one_OSM_element) : This point should be considered when adding details to already existing features. Instead of adding a new node/point for some area, it is better to include that detail in the existing polygon itself.

- [Operator- Key](http://wiki.openstreetmap.org/wiki/Key:operator): Since, facilities in IIT will probably be run by IIT. It is worthwhile to include an *operator* key in the data. For example: The staff canteen could have an "operator: IIT Bombay" tag.

Some other tips i found [here](http://wiki.openstreetmap.org/wiki/Good_practice) that deserve a mention are:

- [Refrain from Armchair mapping](http://wiki.openstreetmap.org/wiki/Armchair_mapping)
- Do not add temporary events on the OSM map. These could include things like Ganpati Pandals. One can use the *geojson on map* approach for this.
- Map for verifiability. Hence, mapping historical events on OSM is not a good practise.
- If you find that your data needs a new tag on OSM, then follow this [new features](http://wiki.openstreetmap.org/wiki/New_Features) page .


**OSM Contributing**

As a class, we tried several methods. The following method uses the [JOSM IDE](https://josm.openstreetmap.de/) to import the data as a map layer and then contribute it to OSM database. **Before proceeding**, check multiple times that your data fields are correctly rendered. You can test this [here](http://geojson.io). Once you update, it *might* be cubersome to update/edit them .

First, Download the [IDE](https://josm.openstreetmap.de/)  for the OS of your own choice.

I have documented it for windows that came [bunduru](https://www.youtube.com/watch?v=wF_vKXrOtY8)-ed with my machine.

Once, the software is installed, we need to install a plugin called *OpenData* this enables JOSM to read csv files. Press F12 or Edit -> Pref and choose plugins and type opendata. You may want to do Download list before. Then check the box and click OK. This installs OpenData plugin.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36952326825/in/album-72157686030264413/" title="opendata"><img src="https://farm5.staticflickr.com/4410/36952326825_4062955f0f_z.jpg" width="640" height="621" alt="opendata"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Now we need a map layer to work on. The preffered way is to use 'open location' option from 'File' menu option. You are presented with the following dialog.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36812725461/in/album-72157686030264413/" title="FileDownload"><img src="https://farm5.staticflickr.com/4367/36812725461_07f1def4bb_z.jpg" width="590" height="298" alt="FileDownload"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

In this dialog, paste the url of the map you wish JOSM to pull. In my case, it was this [http://www.openstreetmap.org/#map=15/19.1337/72.9126](http://www.openstreetmap.org/#map=15/19.1337/72.9126).

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36952326615/in/album-72157686030264413/" title="osm"><img src="https://farm5.staticflickr.com/4404/36952326615_fcddd6a18f_z.jpg" width="640" height="341" alt="osm"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Once downloaded, I got this.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36952326985/in/album-72157686030264413/" title="result"><img src="https://farm5.staticflickr.com/4337/36952326985_bd8d70a0a7_z.jpg" width="640" height="337" alt="result"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

By the this point, we have a base layer ready. Now, I opened the csv file. The usual File --> Open way .

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36764737856/in/album-72157686030264413/" title="openfiles"><img src="https://farm5.staticflickr.com/4382/36764737856_5857da0a1e_z.jpg" width="640" height="411" alt="openfiles"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

My file is 'points.csv'.Click Open. In the popup while importing CSV. The default options worked.
The file gets rendered correctly over the base layer as points. In my case the color of points was cyan.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36812725561/in/album-72157686030264413/" title="bench local"><img src="https://farm5.staticflickr.com/4437/36812725561_7f6556a133_z.jpg" width="640" height="343" alt="bench local"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Please check the points before proceeding.

**Uploading to OSM**

Once checked, you may proceed by clicking on the upload icon. I got this warning popup. I clicked continue as I had checked the data multiple times.
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36764737376/in/album-72157686030264413/" title="warning"><img src="https://farm5.staticflickr.com/4335/36764737376_53d00d84ca_z.jpg" width="640" height="290" alt="warning"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Next you get another warning. One of the fields had a space in between. I chose to ignore it as it was not a standard field anyway. But, I would strictly advice that you use only features mentioned in [wiki](http://wiki.openstreetmap.org/wiki/Map_Features). One should never mark outside the wiki, this would make your contributions virtually indiscoverable as the standard parsers/scrapers/crawlers would only use standard tags. If none of the tags fit the feature, you should request that particular tag to be added to the wiki."This prevents everyone from tagging similar kind of features in their own way before a standard is set, and therefore OSM discourages using tags outside of what is currently listed on the wiki", adds Rasagy.

You need an OSM account to upload. The API uses OAuth. The method that worked for me is 'Automatic'. You are likely to get OAuth credentials. JOSM stores them for you. After the authorization part, you are required to commit the changes.  You will be presented with the following dialog.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36764737336/in/album-72157686030264413/" title="upload"><img src="https://farm5.staticflickr.com/4346/36764737336_42cf629aa7_z.jpg" width="640" height="618" alt="upload"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>  

I chose the data source as 'survey'. Now, press 'Upload'!

Congratulations on contributing to OSM.

You can reopen the location to see your data. In my case, my benches are on the map.
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36814389321/in/dateposted-public/" title="markedbench"><img src="https://farm5.staticflickr.com/4343/36814389321_6c90e0ab13_z.jpg" width="640" height="341" alt="markedbench"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

You can pull the details by clicking on 'History' button.
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36812725511/in/dateposted-public/" title="contributorInfo"><img src="https://farm5.staticflickr.com/4364/36812725511_a9ee731fe2_z.jpg" width="640" height="362" alt="contributorInfo"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

I hope this guide will be helpful.

Data contributed in the course
-----

Following are the details of features marked by my classmates:

| Sno.  |      Feature Marked      |  Number | Contributor | tags|
|----------|-------------|------|
| 1 |  Police Posts | 56  | Udayan | amenity=police    |
| 2 | Ladies Restroom| 205  | Shilpa| amenity=toilets;access=customers;female=yes;level=0; repeat_on=(floors) |
| 3 | Fire Hydrants  | 95 | Amit   | emergency: fire_hydrant |
|4| Dustbins|115| Manasi | amenity=waste_basket|
|5| Tea Shops| 20| Pallavi | shop=tea|
|6| Auto Stops| 14| Raagul |amenity=taxi|
|7| Print Shops|16|Vineet| shop=copyshop;service:copy=yes;service:print=yes;service:generalitems=yes;operator: name of the shop|
|8| Benches| 54 | Rohit |amenity=bench;covered=(state);seats=(number)|
|9   |Drinking Water Spots   |56   |Manoj   |amenity=drinking_water   |

**Links**

Some useful links :

- [OSM wiki](http://wiki.openstreetmap.org/wiki/Main_Page)
- [Beginner’s guide on the OSMwiki](http://wiki.openstreetmap.org/wiki/Beginners%27_guide)
- [LearnOSM](http://learnosm.org/en/)
- [Mapbox’s Mapping guides](https://www.mapbox.com/mapping/)

**Acknowledgements**

I acknowledge my classmates, Prof. Venkat and Rasagy for their contributions to this post.

Cheers,

Rohit
