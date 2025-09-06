---
title: Change the Site Name in the Header to an Image
layout: default
parent: Customization
nav_order: 50
nav_exclude: true
---

# Change the Site Name in the Header to an Image
{: .no_toc}

Jentu on the Digital Garden discord was looking for a way to replace the site name at the top-left corner with an SVG icon instead; here's how I was able to get it to work.


## Table of Contents
{: .no_toc .text-delta}
1. TOC
{:toc}

# Getting Started

Theoretically, you can do this with any file, not just an SVG; however, SVGs tend to scale a better than other formats, and if you already created an SVG for your favicon, you have one readily available.

## 1. Add the desired image to the `/img` directory in your DG repo

I tried to have it just use the favicon where it is, but it wasn't getting passed through in the build; however, the `/img` folder does get passed through, so you can safely add images here.

## 2. Update the relevant scripts

There are three Nunjucks scripts that manage the formatting for different parts of the site; each script is described below, with *Before* and *After*  sections of code which need to be updated.

Below are examples where I've copied favicon.svg into the `/img` folder in my Digital Garden repo, with 1 line of text script on top and bottom. Since we're inserting elements, I want to show where exactly everything goes. 

{: .note}
> There should be screenshots of the before and after, but something with the site formatting is preventing them from appearing. We are troubleshooting this, and any insight is appreciated.

### filetree.njk

`src/site/_includes/components/filetree.njk`

Icon for when the filetree is being displayed (either in full-screen or as a pop-out). Changes begin at line 39.

#### Before

{% highlight  html%}
 <a href="/" style="text-decoration: none;">
	   <h1 style="text-align:center;"></h1>
 </a>
{% endhighlight %}

![](assets/images/cbfdbdeb471b7eb3a7382ce6b42e8256.png)

![](assets/images/45f4fa3f2b7d7bd3a2aae6318b73411c.png)
