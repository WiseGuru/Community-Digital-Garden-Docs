---
title: Visual Garden Header (Topobon)
layout: default
parent: Customization
nav_order: 50
nav_exclude: false
---

# Visual Garden Header (Topobon)
{: .no_toc}

The Digital Garden plugin for Obsidian allows endless [customization](/index.md). Many plugin users have added a visual garden to their website headers. This page outlines the basic instructions. 

![[Screenshot relating to {topic}]]

## What is Visual Garden Header (Topobon)
The visual garden graph from [Topobon](https://github.com/uroybd/topobon/tree/main) is a component comprised of Javascript and CSS files, which adds icons in a diamond grid that represent links to different pages of your digital garden. 

## How to add the Visual Garden Header (Topobon) 
Describe each step with screenshots, using language aimed at a new user of Obsidian and the digital garden plugin. Explain why a Step needs to be taken, where appropriate.

### Step 1 - Copy Topobon files to your repository
![[Step Screenshot]]

You need to copy over some files to your repository, for the garden to generate in your header. 

		- forest.njk — save this file as `src/site/_includes/components/user/index/header/forest.njk` which will insert the garden view into your index.html header
		- userUtils.js — replace this file `src/helpers/userUtils.js` which codes how the garden is generated 
		- custom-style.scss — copy the relevant section of CSS to `src/site/styles/custom-style.scss`; this dictates how the garden should look 
		- .svg images — these are the elements that are populated in the garden 
  
### Step 2 - Allow frontmatter to 'pass-through'
![[Step Screenshot]]

For the component to work, it needs to read the 'noteIcon' of your files. 

1. Go to Digital Garden plugin settings
2. Go to Features
3. Click Manage note settings
4. Toggle on 'Let all frontmatter through (dg-pass-frontmatter)'


### Step 3
![[Step Screenshot]]

Describe how to carry out the specific step, with verb-first language. E.g. Click the x link, Scroll down to y section vs The y link should be made visible on your screen.

## Related
Add links to known users / variations of this garden component
List relevant link - explain why it's relevant, if not apparent
List another relevant link - same as above
