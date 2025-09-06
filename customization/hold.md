
#### After

{% highlight  html%}
	<div style="display: flex; justify-content: center;">
		<a href="/" style="text-decoration: none;">
			<img src='/img/favicon.svg'
				alt="{{meta.siteName}}"
				style="max-width: 100%; width: 180px; height: auto; margin: 15px !important; display: block;">
		</a>
	</div>
{% endhighlight %}

![](assets/images/21bab61a18fb1eb9e8dac7873b0b5e62.png)

![](assets/images/3fa58e803f23e7eafe742069fff9b13b.png)

### navbar.njk

`src/site/_includes/components/navbar.njk`

Icon for when filetree is disabled entirely in the Digital Garden settings. The changes begin at line 3.

#### Before

{% highlight  html%}
<div class="navbar-inner">
	<a href="/" style="text-decoration: none;">
		<h1 style="margin: 15px !important;">{{meta.siteName}}</h1>
	</a>
</div>
{% endhighlight %}

I don't have a *Before* screenshot here because I forgot to test ahead of time and I don't use it anyway, but I trust you to figure out how it looks normally.

#### After

{% highlight  html%}
<div class="navbar-inner">
	<a href="/" style="text-decoration: none;">
		<img src='/img/favicon.svg'
			alt="{{meta.siteName}}"
			style="max-height: 100%; height: 100px; width: auto; margin: 15px !important; display: block;">
	</a>
</div>
{% endhighlight %}

![](assets/images/bc95812fc11fcc38cd6bb9379dbead64.png)

### filetreeNavbar.njk

`src/site/_includes/components/filetreeNavbar.njk`

Icon for when the filetree is collapsed. The changes begin at line 7.

#### Before

{% highlight  html%}
<a href="/" style="text-decoration: none;">
	<h1 style="margin: 15px !important;">{{meta.siteName}}</h1>
</a>
{% endhighlight %}

![](assets/images/2b16e73fef2eb9532f114085fe0936b6.png)

#### After

{% highlight  html%}
	<a href="/" style="text-decoration: none;">
		<img src='/img/favicon.svg'
			alt="{{meta.siteName}}"
			style="max-height: 100%; height: 100px; width: auto; margin: 15px !important; display: block;">
	</a>
{% endhighlight %}

![](assets/images/993bbbd765f16db0b031af2c64c00439.png)