---
title: "“/usr/bin/ld: cannot find -lz” when building node.js"
author: arnehass
date: 2012-01-19
template: article.pug
tags: build, buster.js, node.js, tdd
original: https://icanhasweb.wordpress.com/2012/01/19/usrbinld-cannot-find-lz-when-building-node-js/
---

<p>As part of the thesis I’ve been looking around for test framework for JavaScript. I’ve found <a href="http://busterjs.org/">Buster.JS</a>, and its support of mocking, stubbing and asynchronous tests appealed to me. It required <a href="http://nodejs.org/">Node.JS</a> to work, so I began the task of installing it. I started getting errors, and as I’m not that experienced with the whole compiling-process (I’ve experience from courses where we programmed with C and assembly, but ain’t really fond of it). It took me some time debugging the problem, but the line&nbsp;“/usr/bin/ld: cannot find -lz” stood out after some iterations.</p>
<span class="more"></span>
<p>With this in mind, I searched for <em>build error “cannot find -lz”</em>, and the second result was <a href="http://stackoverflow.com/questions/3373995/usr-bin-ld-cannot-find-lz">“/usr/bin/ld: cannot find -lz” on StackOverflow</a>. I realized I was cross-compiling, and <a href="http://stackoverflow.com/questions/3373995/usr-bin-ld-cannot-find-lz#answer-3374222">the answer</a> hinted me to check which libraries were required for the build. Surely enough, target_defaults.libraries in config.gypi were set to ['lz'].</p>
<p>I wasn’t sure of what to do at this point, but I removed the dependency on lz (by changing the value set to libraries to []), and behold! It built, and I could finally install the program!</p>
<p>Now, I’ve began trying to install Buster.JS. There seems to be some problems (as you can see in&nbsp;<a href="http://snipt.org/wgpon2">this snippet</a>), but I’ll return and write an update when/if I tackle it.</p>
