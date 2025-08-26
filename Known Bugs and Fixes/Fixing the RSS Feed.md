---
layout: default
parent: Bugs and Fixes
title: Fixing the RSS Feed
nav_order: 2
---
# tl;dr
For most people, you can just open `/src/site/feed.njk` from your repo and modify lines 10, 11, and 26 to have 5 slashes (`/`) instead of 4.
![](attachment/58c767cc167844502d0fcc9d0901563c.png)

![](attachment/7250c626c1f41002c8de0013cadae0d8.png)

Save and push changes, and your feed should start rendering properly.

**If you use custom icons**, you may only need the 4 slashes to make the feed work.^[[RSS link missing · Issue #136 · oleeskild/digitalgarden](https://github.com/oleeskild/digitalgarden/issues/136#issuecomment-2340139055)]

# RSS Feed not working

![](attachment/280ef664d06874de2c78de24a90ccdf4.png)

If you've tried to view the RSS feed for your site, you've probably seen the above error and noticed that your RSS feed otherwise looks well formed. If you look closely, the problem is when links are created with the feed.njk script, they don't get closed properly in the `feed.xml` output file.

![](attachment/945987665e77523800fc447e56c33254.png)

I tried a few things before I remembered that I should search for answers first, and found that this problem is well documented and explored; in particular, dayne on GitHub did a ton of testing and found the solution of using 5 `/` instead of 4.^[[Atom/RSS feed error · Issue #493 · oleeskild/obsidian-digital-garden](https://github.com/oleeskild/obsidian-digital-garden/issues/493#issuecomment-1825034758)]

![](attachment/98b7854739e6946e724541fab1455a97.png)


# Linked GitHub Issues
