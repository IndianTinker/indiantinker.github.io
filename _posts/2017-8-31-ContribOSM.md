---
layout: post
title:  Contributing to OSM using JOSM
image: https://c1.staticflickr.com/3/2906/33678280611_41bbeede72.jpg
location:  IDC IIT Bombay India
tags:
- tut
---

> This is [Stub](https://en.wikipedia.org/wiki/Wikipedia:Stub) on contributing to OSM using JOSM. The post is meant to document to process of uploading data points gathered as a part of [Interactive Data Viz](https://info-design-lab.github.io/) course at IDC taught by Prof. Venkat. The article may be updated in the future.

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

**OSM Contributing**

As a class, we tried several methods. The following method uses the [JOSM IDE](https://josm.openstreetmap.de/) to import the data as a map layer and then contribute it to OSM database. **Before proceeding**, check multiple times that your data fields are correctly rendered. You can test this [here](http://geojson.io). Once you update, it *might* be cubersome to update/edit them .

First, Download the [IDE](https://josm.openstreetmap.de/)  for the OS of your own choice.

I have documented it for Bindows.

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

Next you get another warning. One of the fields had a space in between. I chose to ignore it as it was not a standard field anyway. But, I would recommend you use an '_'. Since, I did not document it when doing for the first time, I dont have those screenshots. But I will add them once some of the classmates attempt.

You need an OSM account to upload. The API uses OAuth. The method that worked for me is 'Automatic'. You are likely to get OAuth credentials. JOSM stores them for you. After the authorization part, you are required to commit the changes.  You will be presented with the following dialog.

<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36764737336/in/album-72157686030264413/" title="upload"><img src="https://farm5.staticflickr.com/4346/36764737336_42cf629aa7_z.jpg" width="640" height="618" alt="upload"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>  

I chose the data source as 'survey'. Now, press 'Upload'!

Congratulations on contributing to OSM.

You can reopen the location to see your data. In my case, my benches are on the map.
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36814389321/in/dateposted-public/" title="markedbench"><img src="https://farm5.staticflickr.com/4343/36814389321_6c90e0ab13_z.jpg" width="640" height="341" alt="markedbench"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

You can pull the details by clicking on 'History' button.
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/94411929@N06/36812725511/in/dateposted-public/" title="contributorInfo"><img src="https://farm5.staticflickr.com/4364/36812725511_a9ee731fe2_z.jpg" width="640" height="362" alt="contributorInfo"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

Hope that helps !


Cheers,

Rohit
