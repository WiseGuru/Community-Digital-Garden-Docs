---
dg-publish: true
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

## filetree.njk
Before:
```html
{% endfor %}
 <a href="/" style="text-decoration: none;">
	   <h1 style="text-align:center;">{{meta.siteName}}</h1>
 </a>
 {% for imp in dynamics.filetree.afterTitle %}
```
![](../assets/images/cbfdbdeb471b7eb3a7382ce6b42e8256.png)
![](../assets/images/45f4fa3f2b7d7bd3a2aae6318b73411c.png)

After:
```html
{% endfor %}
	<div style="display: flex; justify-content: center;">
		<a href="/" style="text-decoration: none;">
			<img src='/img/favicon.svg'
				alt="{{meta.siteName}}"
				style="max-width: 100%; width: 180px; height: auto; margin: 15px !important; display: block;">
		</a>
	</div>
 {% for imp in dynamics.filetree.afterTitle %}
```

![](../assets/images/21bab61a18fb1eb9e8dac7873b0b5e62.png)
![](../assets/images/3fa58e803f23e7eafe742069fff9b13b.png)
## navbar.njk
Before:
```html
<div class="navbar-inner">
	<a href="/" style="text-decoration: none;">
		<h1 style="margin: 15px !important;">{{meta.siteName}}</h1>
	</a>
</div>
```

> I don't have a screenshot here because I forgot to test ahead of time and I don't use it anyway, but I trust you to figure out how it looks normally.

After:
```html
<div class="navbar-inner">
	<a href="/" style="text-decoration: none;">
		<img src='/img/favicon.svg'
			alt="{{meta.siteName}}"
			style="max-height: 100%; height: 100px; width: auto; margin: 15px !important; display: block;">
	</a>
</div>
```

![](../assets/images/bc95812fc11fcc38cd6bb9379dbead64.png)
## filetreeNavbar.njk

Before:
```html
{% endfor %}
<a href="/" style="text-decoration: none;">
	<h1 style="margin: 15px !important;">{{meta.siteName}}</h1>
</a>
{% for imp in dynamics.filetree.afterTitle %}
```
![](../assets/images/2b16e73fef2eb9532f114085fe0936b6.png)

After:
```html
{% endfor %}
	<a href="/" style="text-decoration: none;">
		<img src='/img/favicon.svg'
			alt="{{meta.siteName}}"
			style="max-height: 100%; height: 100px; width: auto; margin: 15px !important; display: block;">
	</a>
{% for imp in dynamics.filetree.afterTitle %}
```

![](../assets/images/993bbbd765f16db0b031af2c64c00439.png)