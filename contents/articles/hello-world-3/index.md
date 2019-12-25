---
title: "Hello world!"
author: arnehass
date: 2015-12-27
template: article.pug
tags: blog, Wintersmith, Wordpress, JavaScript, redesign
---

This is the first entry in my attempt at revitalizing icanhasweb.net. I've spent some time this christmas holiday to refurnish the website, rewriting the code, merging two blogs into one, and changing the design a bit.

<span class="more"></span>

**TL;DR: I've rewritten my website using Wintersmith. This will be my only blog going forward. I'll detail the ideas and choices that I've made in my next blog post.**

The code has been rewritten using [Wintersmith](http://wintersmith.io/). I've used it in a couple of other projects, and found it to be a framework much more acceptable to change in content design. [Wordpress](https://wordpress.com/) is a treat when used for blogging and simple pages, but not that great if I want to have other kinds of content (many will probably disagree with me on this). The fact that it produces static content is also a plus in terms of performance. And not to mention the fact that it's underlying programming language is JavaScript, which is right up my alley.

I've decided to merge my two blogs into one, and have copied their content to the new blog. To maintain two blogs when you don't really have the motivation and energy to maintain one wasn't the best idea. It did create a bit of a strange distinction, and one blog should be enough.

All posts that were written elsewhere have been linked to their original URL. The idea is to not introduce another possibility of commenting the posts. <strike>For the new blog system I'm trying out [Spot.IM](https://www.spot.im/).</strike> I'm sticking with [Disqus](https://disqus.com) as the service for commenting (Spot.IM proved to invasive for my taste).

Lastly I've pollished the design a bit. No big changes on the looks of it, but quite big changes under the hood. Some redundant markup was removed in favor of trying out some new CSS standards, namely [Flexbox](http://www.w3.org/TR/css-flexbox-1/) and [Grid](http://www.w3.org/TR/css-grid-1/). The latter is probably not available in your browser unless you've turned on experimental features. It also allowed me to try out [the @supports feature in CSS](https://developer.mozilla.org/en/docs/Web/CSS/@supports), so that there are some good fallbacks. The decision to try these new technologies was heavily influenced by [Rachel Andrews writing on 24 ways](https://24ways.org/2015/grid-flexbox-box-alignment-our-new-system-for-layout/).

There are probably quite a bit of flaws, of which some will be fixed, but most will probably be ignored. This is after all my personal webpage, and I have no need to support older browsers.

I do however try to make it as accessible as possible in terms of following the good practices laid out by [WAI](http://www.w3.org/WAI/). My knowledge on this is severely lacking, so I'll take any tips with gratitude.

As you've probably already noticed, I've decided to write my new blog posts in english. This to improve my writing skills, and to make the content be available to a wider audience (for the off-chance that someone will stumble upon this website).

For my next post I'll go deeper into the ideas and choices I've made when coding the new system. [Follow me on Twitter](https://twitter.com/megoth) or [subscribe to the RSS feed](http://icanhasweb.net/feed.xml) to stay updated.
