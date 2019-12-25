---
title: Installing Buster.JS
author: arnehass
date: 2012-01-20
template: article.pug
tags: buster.js, node.js, npm.js, tdd, testing
original: https://icanhasweb.wordpress.com/2012/01/20/installing-buster-js/
---

<p>As mentioned in <a title="“/usr/bin/ld: cannot find -lz” when building&nbsp;node.js" href="http://icanhasweb.wordpress.com/2012/01/19/usrbinld-cannot-find-lz-when-building-node-js/">my previous post</a>, I’ve been wanting to use <a href="http://busterjs.org/">Buster.JS</a>&nbsp;as test framework for my implementation of the master thesis. After installing node, I was ready to install buster. Or so I thought. With&nbsp;<a href="http://npmjs.org/">npm</a>&nbsp;&nbsp;(package manager for node)&nbsp;I tried “npm install -g buster”, which gave me an error (<a href="http://snipt.org/wgpon2">full output</a>). It seemed that the module glob wasn’t available in the version buster needed.</p>
<span class="more"></span>
<p>After looking around a bit, I read about <a href="http://npmjs.org/doc/install.html">the install function in npm</a>. So I can install specific versions easily, neat! A “npm install glob@2.1.0″ later, another error occurs! It seemed that my version of node, v.0.7.0-pre, wasn’t supported by version 2.1.0 of glob. So back to node-building it was. Luckily, <a href="https://github.com/joyent/node/tree/v0.6">v6.0 is its own branch</a>, enabling me to easily switch with “git checkout v6.0″.</p>
<p>Ok, “./configure” next! Hmmm, seems that I didn’t have OpenSSL installed. Me being a noob, I installed the wrong package, but luckily I found a <a href="http://erikeldridge.wordpress.com/2010/10/21/getting-started-with-node-js/">piece that helped me on the right path</a>. Right, “<em>sudo apt-get install libssl-dev</em>” it is.</p>
<p>Now installing node went peachy, and with that also glob. And then, <em>finally</em>, I could install buster! <em>npm install -g buster</em> was the magic words, and so I was ready to start testing! Or so I thought…</p>
<p>To check if the program ran as intended, I <a href="https://github.com/busterjs/buster-args">cloned buster-args</a> as it was used as <a href="http://busterjs.org/docs/overview/">an example on Node testing on buster.js.org</a>. I ran into “Error: cannot find module ‘buster’”. As I was new to both node, npm and buster, I really had no idea where I’d gone wrong, so I posted <a href="https://github.com/busterjs/buster/issues/58">an issue at github/busterjs</a>.</p>
<p>I also joined #buster@freenode. First I merely watched for activity, and as it started I posted my questions to get a quicker response. The authors were very helpful, and soon made it clear that I hadn’t linked the project. Running <em>npm link</em>&nbsp;in the project I wanted to test, and voilà! A beautiful and informative output stood before me. Nice!</p>
<p>Now I’m going to implement into my own framework, so wish me luck ^\_^</p>
