---
nav_order: 99
title: Syntax and Style Guide
layout: default
---
# Syntax and Style Guide
This site uses a slightly different version of Markdown than Obsidian, and there are some key differences in how files are formatted

## Editing in Obsidian
If you choose to work on documents in Obsidian, I recommend making the following changes to your preferences:
1. Files and Links
	1. **Automatically update internal links**: Toggled on
	2. **Default location for new notes**: Same folder as current file
	3. **New link format**: Relative path to file
	4. **Use `[[Wikilinks]]`**: Toggled off
	5. **Attachment folder path**: assets/images
2. Community plugin
	1. [Auto Link Title](https://github.com/zolrath/obsidian-auto-link-title) by Matt Furden

## Images
Images should be stored in `assets/images` for easier management.

Embedded images must linked to the exact folder from the current location; for example, linking to a file in `/assets/images` from `/Folder1` would require the path `../assets/images/picture.jpg`

## Callouts
Callouts are written following the [Just the Docs - Callouts](https://just-the-docs.github.io/just-the-docs/docs/ui-components/callouts/) documentation. This site has the following defined callouts:

1. warning
	1. red
2. tip
	1. yellow
3. success
	1. green
4. reminder
	1. blue
5. note
	1. blue
6. example
	1. purple

### Callout Formatting
Use braces to indicate what kind of callout you're using, and then greater-than symbols for text.

{: .tip}
> My text.

```
{: .tip}
> My text.
```

Append the callout type with "-title" to convert the first line into the title for the callout.

{: .warning-title}
> This is the title
> 
> This is the text.

```
{: .warning-title}
> This is the title
> 
> This is the text
```

Paragraphs must be separated with a full line break.

{: .note-title}
> This is the title
> 
> This is the first paragraph
> 
> This is the second paragraph

```
{: .note-title}
> This is the title
> 
> This is the first paragraph
> 
> This is the second paragraph
```
