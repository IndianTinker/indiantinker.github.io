---
layout: post
title: Implementing Tags/Categories on Jekyll using Liquid !
tags:
- Jekyll
- Pune
- Blogging
- web
---


I have recently been working on my blog on using *Jekyll* on **Github Pages** and the experience has been wonderful. It a lot easier than wordpress where I have to login and do all kinds of formatting to churn out a decent looking post. Here its just Markdown and some pre configurations and I just need to update a github repo at the end of it. 

Interestingly, Jekyll supports [Liquid](liquidmarkup.org/) a templating engine built on ruby that is developed by e commerce giant *Shopify*.
Using Liquid we can add some basic logic ( and maybe advance too) to the blog like categorization and tagging. Tagging is not available out of the box with Jekyll but can be implemented easily using **Liquid** .

It essentially involves two steps:

1. Editing YML front matter (The thing between the 3 dashes)
2. Creating a Category page to automatically accumulate all the tags you added 

After this the changes will be reflected on compilation. And Voila! You would have added tags to your blog!
   
Lets get started.

Add a `Tags` variable to the frontmatter block and list the tags as shown the following example:

```
---
layout: post
title: Tagging Jekyll
tags:
- Jekyll
- Blogging
- web
---
```
Next, create a page in the root or in whatever way you have configured Jekyll to pick new page and create a page say *Categories* etc.
Lets name it Categories.md

Use the following snippet to display tags.

{% gist 3eddb75957eaf9f9b8e8 %}

Now

```
jekyll build
jekyll serve
```
and see the changes in the blog on *http://localhost:4000*.
If you face any issues be sure to comment here .

Cheers!

Rohit
