---
title: How to change the Sitename to an Image
category: Customization
description: Pix or it didn't happen
layout: default
parent: Customizing your Digital Garden
nav_order: 10
---

Jentu on the Digital Garden discord was looking for a way to replace the site name at the top-left corner with an SVG icon instead; here's how I was able to get it to work.

> [!Warning] Out of band Modification
> This mod is outside of the "safe zone" for the template, meaning that any future updates to the template by Ole will overwrite these changes.

# Getting Started

Theoretically, you can do this with any file, not just an SVG; however, SVGs tend to scale a better than other formats, and if you already created an SVG for your favicon, you have one readily available.

1. Add the image to the `/img` directory in your DG repo
	1. I tried to have it just use the favicon where it is, but it wasn't getting passed through in the build; however, the `/img` folder does get passed through, so you can safely add images here.
2. Update the following following files
	1. `navbar.njk`
		1. Icon for when filetree is disabled entirely in the Digital Garden settings
	2. `filetreeNavbar.njk`
		1. Icon for when the filetree is collapsed
	3. `filetree.njk`
		1. Icon for when the filetree is being displayed (either in full-screen or as a pop-out)

Below are examples where I've copied favicon.svg into the `/img` folder in my Digital Garden repo, with 1 line of text script on top and bottom. Since we're inserting elements, I want to show where exactly everything goes. 

I also provided screenshots to show before/after so you don't have to muck about just to see how it looks. You may need to tweak the pixel sizes to get your image to show optimally.
