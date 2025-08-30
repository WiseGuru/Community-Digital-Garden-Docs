
# Adding Giscus
Created `_includes/footer_custom.html` and added the following from the https://giscus.app:

```html
<script src="https://giscus.app/client.js"
        data-repo="WiseGuru/dg-docs-comments"
        data-repo-id="R_kgDOPmpDLg"
        data-category="DG Docs Comments"
        data-category-id="DIC_kwDOPmpDLs4CuwAo"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
```

# Adding a theme switcher
Heavily stolen from [Home \| mmCEsim](https://mmcesim.org/) and then tweaked with vibe code when it didn't work for some reason.

Created three files:
1. `_includes`
	1. `components`
		1. `aux_nav.html`
	2. `head.html`
2. `assets`
	1. `css`
		1. `just-the-docs-switchable-src.css`
		2. `just-the-docs-switchable.css`
	2. `js`
		1. `theme-switch.js`

There were a few key changes that deviated from the source site:
1. Had to remove references to `jtd` global as it wasn't present in the theme bundle
	1. Not sure why this was since I built from template
	2. ChatGPT proved extremely helpful here
2. Making sure that `head.html` was complete with content from the original JTD template
	1. And had to remove references to some other `just-the-docs-head-nav.css` styling files


# Customizing Title
Added the file `_includes/title.html` so I could customize the words without affecting the rest of the site and add an image (the SVG favicon).