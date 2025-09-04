---
title: Add Media to a Digital Garden
layout: default
parent: Customization
nav_order: 50
nav_exclude: false
---

# Add Media to a Digital Garden
{: .no_toc}

{: .warning}
> Embedding a file on a site allows anyone to download it. Like [Ohm-I raps about in "Download This Song For Free](https://mcohmi.bandcamp.com/track/download-this-song-for-free), these are just links to files, and there are no protections in place preventing someone from downloading them to their own device.

You can add externally-hosted media to your digital garden using HTML code and iframes. Below are some examples of embedded music and PDFs which are hosted on other sites.

> Example music; lyrics by Max McGuire, music by [Erik Akopyan.](https://www.fiverr.com/erikakopyan?source=order_page_user_message_link)
<audio controls>
  <source src="https://www.dropbox.com/scl/fi/pq27xm8b5s33g508o7qkw/Path-to-Mephistopheles.wav?rlkey=bk84g42ua7b5fpfyfhsiwmwvo&st=x9xo6i25&raw=1" type="audio/wav">
  Your browser does not support the audio element.
</audio>


> Example PDF
> <iframe src="https://drive.google.com/file/d/1HqnOOw5w8qUUByFA-3hkLESA4ALzvesK/preview" width="640" height="480" allow="autoplay"></iframe>

## Table of Contents
{: .no_toc .text-delta}
1. TOC
{:toc}

# How to embed media in your Digital Garden
There are two ways to embed media in your site; you can use an inline frame (iframe) element, or (if it's audio), you can use the HTML `<audio>` element. Both methods can be entered directly into your notes in Obsidian, and should render as they will appear on your site.

> Example using the HTML `<audio>` element

{% highlight markdown %}
```HTML
<audio controls>
  <source src="https://www.dropbox.com/scl/fi/pq27...qkw/Path-to-Mephistopheles.wav?rlkey=bk84g42...mwvo&st=x9xo6i25&raw=1" type="audio/wav">
  Your browser does not support the audio element.
</audio>
```
{% endhighlight}

> Example using an iframe

<div class="code-example" markdown="1">
```HTML
<iframe style="background: #2F383E;" src="https://drive.google.com/file/d/1xySbXbL...KHXqYm/preview" width="480">
</iframe>
```
</div>

Not all cloud storage hosts work the same way, and getting a workable link for embedding content can be annoying.
## Adding music from Dropbox using the HTML 'audio' element
Here's how you can embed music *which you have the rights to share* into your site with Dropbox. For this example, we're using a song whose lyrics were written by Max McGuire; [The Path to Mephistopheles](https://lendalorsjournal.online/songs-and-stories/path-to-mephistopheles/).

{: .note}
> Some file formats don't play well with different hosts; for example, a .wav works fine when hosted on Dropbox, but gives an error for an incompatible browser on Google Drive. However, .mp3 files work fine from Google Drive.
> 
> Experiment with different hosts if you run into problems.

### 1. Upload the file to Dropbox and click the link icon to share it
Permissions will be set automatically the first time you click the link. 

![](../assets/images/dropbox-link%201.gif)

by default, this link is accessible to anyone without requiring a password.

{: .note}
> You can delete this link by going to the three-dot menu for the file, selecting *Manage Permissions*, going to *Links*, then clicking on *Settings* to manage or delete the link.


You will get a URL that looks something like this:[^1]

`https://www.dropbox.com/scl/fi/pq27xm8b5s33g508o7qkw/Path-to-Mephistopheles.wav?rlkey=bk8...vo&st=ryuj9e70&dl=0`

### 2. Modify the link to allow direct access
Modify the end of the link so that instead of `&dl=0`, set it to `&raw=1`. This will allow your site visitors to listen to the song instead of automatically downloading it when they access your site.

`https://www.dropbox.com/scl/fi/pq27xm8b5s33g508o7qkw/Path-to-Mephistopheles.wav?rlkey=bk8...vo&st=ryuj9e70&raw=1`

### 3. Embed the song with code
Insert your link into the `<audio>` tag sample below, replacing the fake link to Dropbox with your own link.

<div class="code-example" markdown="1">
```HTML
<audio controls>
  <source src="https://dropbox.com/link.to.file&raw=1" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```
</div>

Don't use a codeblock for this; write the code directly on the page. A codeblock will let you see the code, but won't actually run it.

1. You're using the [HTML audio element](https://www.w3schools.com/html/html5_audio.asp) to embed your media
	1. The source element uses `src` to set the URL source, and `type` to say what kind of file it is.
		1. Hence, a WAV audio file would be `type=audio/wav`
	2. You can use multiple `<source>` tags to link to different files, and the browser will stream the first one it can use.
		1. This can be helpful if you want to ensure compatibility, while prioritizing quality
2. The text `Your browser does not...` will only appear if none of the source files you link work.
3. There are other features you can enable like autoplay, but that's super rude and you should be ashamed for even thinking of doing that.

You're done! Publish the page and listen to your success.

## Embedding a PDF from Google Drive using an iframe
Embedding files from Google Drive is relatively straightforward, and they even have an "embed file" option which pre-generates the iframe code for you.

### 1. Open the file in a new tab and changing permissions
1. Double-click the file to open a preview of it, then click on the three-dot menu next to the **Share** button and click "*Open in new window*"

![](../assets/images/Add%20Media%20to%20a%20Digital%20Garden%20or%20Obsidian%20Note-3.png)

2. Change "General Access" from "Restricted" to "Anyone with a link"
	1. **Leave this permission as "Viewer" to prevent people from making changes to the file**

![](../assets/images/Add%20Media%20to%20a%20Digital%20Garden%20or%20Obsidian%20Note-2.png)

### 2. Copy the "Embed" code and paste it into Obsidian
1. click on the three-dot menu next to the "Share" button and select "Embed item..."

![](../assets/images/Add%20Media%20to%20a%20Digital%20Garden%20or%20Obsidian%20Note-4.png)

Copy and paste the code into an Obsidian note. Don't use a code, as this will only show you the code, and not the file being previewed.

<div class="code-example" markdown="1">
```html
<iframe src="https://drive.google.com/file/d/1HqnOOw5w8qUUByFA-3hkLESA4ALzvesK/preview" width="640" height="480" allow="autoplay"></iframe>
```
</div>

{: .warning}
> By default, Google's embed code has "autoplay" enabled. Remove that function unless you hate people who visit your site and wish to cause them pain.

<iframe src="https://drive.google.com/file/d/1HqnOOw5w8qUUByFA-3hkLESA4ALzvesK/preview" width="640" height="480" allow="autoplay"></iframe>

If you already have the link to the file and don't want to go through the steps to generate the embed code, you can just modify the URL from the shared link to end in `/preview` instead of `/view?usp=sharing`


### Pull Requests
These feature-requests add the ability to natively embed and host PDFs and audio-files in Digital Garden.
- [PDF Extension by MostlyKIGuess · Pull Request #691 · oleeskild/obsidian-digital-garden · GitHub](https://github.com/oleeskild/obsidian-digital-garden/pull/691)
- [Add support for audio files by eulersson · Pull Request #674 · oleeskild/obsidian-digital-garden · GitHub](https://github.com/oleeskild/obsidian-digital-garden/pull/674)

---

[^1]: Ellipses used for obfuscation.
