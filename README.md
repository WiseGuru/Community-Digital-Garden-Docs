# Community Digital Garden Docs 
This is a collection of guides, fixes, and customizations you can apply to your Digital Garden. It is not directly affiliated with Ole’s Digital Garden plugin, template, or docs. (We love it!) 

You can access the docs at [help.dg-docs.com].

## Tech stack 
The Community Digital Garden Docs tech stack includes: 
- [Jekyll] for static site generator
- [GitHub Pages] for deployment and version control
- [Just the Docs] for the theme
- [mmcesim.org] for the theme switcher

## How to contribute (Teamwork!)
This is a community-managed site and series of guides. If you would like to contribute to the repo, we invite you to: 
- suggest changes via pull request
- submit or respond to issues 
- fork or download all of the docs.

Accepted changes will be merged with the main branch [^1]. 

## Building and previewing your site locally

Assuming [Jekyll] and [Bundler] are installed on your computer:

1.  Change your working directory to the root directory of your site.
2.  Run `bundle install`.
3.  Run `bundle exec jekyll serve` to build your site and preview it at `localhost:4000`.

The built site is stored in the directory `_site`.

For more details, you can check the [GitHub Docs Official Documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

--- 

## Licensing and Attribution

This repository is licensed under the [MIT License]. You are generally free to reuse or extend upon this code as you see fit; just include the original copy of the license (which is preserved when you "make a template"). While it's not necessary, we'd love to hear from you if you do use this template, and how we can improve it for future use!

The deployment GitHub Actions workflow is heavily based on GitHub's mixed-party [starter workflows]. A copy of their MIT License is available in [actions/starter-workflows].

----

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[help.dg-docs.com]: https://wiseguru.github.io/Community-Digital-Garden-Docs/
[Jekyll]: https://jekyllrb.com
[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[mmCEsim.org]: https://github.com/mmcesim/mmcesim.org
[Bundler]: https://bundler.io
[GitHub Docs Official Documentation]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
[MIT License]: https://en.wikipedia.org/wiki/MIT_License
[starter workflows]: https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml
[actions/starter-workflows]: https://github.com/actions/starter-workflows/blob/main/LICENSE
