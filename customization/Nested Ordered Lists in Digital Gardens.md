---
dg-publish: true
---
> [!Tip] Reminder
> Free software isn't free. Support Ole, the Digital Garden developer: [Buy Ole Eskild Steensen a Coffee - oleeskild - Ko-fi](https://ko-fi.com/oleeskild)

[I wrote a plugin doing this in Obsidian](https://github.com/WiseGuru/obsidian-automatic-list-styles) (or ChatGPT wrote it and I gave some strongly worded encouragement), and I wanted to make the same thing occur on my sites. However, I had no idea how to do it, and ChatGPT was telling me that I needed three scripts in HTML, CSS, and Java. Soooo I asked around, and to my chagrin and delight, Ole ([yes, that Ole](https://github.com/oleeskild/digitalgarden)) gave me working CSS script to nest my lists! I added some comments, but the rest is basically untouched.

Per the instructions on [on Ole's Digital Garden Docs site](https://dg-docs.ole.dev/advanced/adding-custom-components/), you can add custom CSS script to the folder `src/site/styles/user`, or the file `src/site/styles/custom-styles.scss` (though this is considered deprecated).

I chose the Deprecated method, since this is all I had to do, and copy/pasted the script below into the `custom-styles.scss` file. And it worked like a charm!

> [!info] NOTE
> This works inside or out of the `body {}` brackets, but you may need to flush your browser cache for the data to show correctly. When in doubt, open your site in an *Private* window (`Ctrl+Shift+N` for Chrome, `Ctrl+Shift+P` for Firefox)


```CSS
/* Ordered Lists */
ol {
  list-style-type: decimal; /* Level 1: 1, 2, 3, ... */
}

ol ol {
  list-style-type: lower-alpha; /* Level 2: a, b, c, ... */
}

ol ol ol {
  list-style-type: lower-roman; /* Level 3: i, ii, iii, ... */
}

ol ol ol ol {
  list-style-type: upper-alpha; /* Level 4: A, B, C, ... */
}

ol ol ol ol ol {
  list-style-type: upper-roman; /* Level 5: I, II, III, ... */
}

ol ol ol ol ol ol {
  list-style-type: decimal-leading-zero; /* Level 6: 01, 02, 03, ... */
}

/* Unordered Lists */
ul {
  list-style-type: disc; /* Level 1: Bullet */
}

ul ul {
  list-style-type: circle; /* Level 2: Hollow Circle */
}

ul ul ul {
  list-style-type: square; /* Level 3: Square */
}
```

1. And as you can see
	1. It's working great!
		1. Exactly as intended
			1. Unless it's not
		2. In which case, I probably did something
			1. To screw it up.

Unfortunately, it won't loop, so once you reach the lowest level, it will just keep using that style (the Obsidian plugin [LawList by willem-schlieter](https://github.com/willem-schlieter/lawlist) loops, fancy fancy!).

- So if I use bullets
	- Otherwise known as unordered lists
		- I can only get this far down
			- Before we start seeing squares for days

And if you wanted to have it go down another layer, you could just copy/paste the existing code and add the appropriate `ol/ul`'s in front of it to go that much deeper.

![](../assets/images/aa005043be03026f71b0779b4474d706.jpg)