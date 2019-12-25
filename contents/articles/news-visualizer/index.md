---
title: "News Visualizer"
author: arnehass
date: 2011-01-16
template: article.pug
tags: dan albritton, data visualization, document-driven design, google news, implementation, javascript, marcos weskamp, master thesis, newsmap, open data, test-driven development
original: https://icanhasweb.wordpress.com/2011/01/16/news-visualizer/
---

<p>I’ve written about <a href="http://icanhasweb.wordpress.com/2010/12/27/masters-thesis-preliminary-work/">my master thesis</a> in the previous post, and I’ve been thinking a lot of how to acquire the required&nbsp;skill-set&nbsp;to understand the topic in a good manner. I’ve undergone courses at IFI 3 years &nbsp;now, so I do have some theoretical understanding of themes that are often taught in computer studies, such as algorithms, data structures, computer architecture, and discrete mathematics&nbsp;<a href="https://wiki.uio.no/matnat/ifi/arnehass-master/index.php/Courses_taken">amongst others</a>. I believe that undertaking the courses INF3580, INF5120 and INF5100 (as well as special curriculum) will give me another layer of theoretical foundation that is required for this thesis.</p>
<p>But there is a field that the University of Oslo have no teaching to offer, and that is&nbsp;JavaScript (hereby shortened JS). To handle this, I must teach myself what is needed to know. I do already have some experience with JS, through work and a personal interest in the field that have stayed with me for quite some time. But I feel that the level of insight the thesis requires me to gain better knowledge of the matter, and have decided to develop a JS-based application.</p>
<span class="more"></span>
<h2>The concept</h2>
<p>I’ve always been fascinated by data visualization – <a title="Journalism in the Age of Data: A Video Report on Data Visualization by Geoff McGhee" href="http://datajournalism.stanford.edu/index.html">the art of presenting data that makes use of our visual perceptions</a>. I believe that rich data sets can be much more efficiently presented by visualizing it with concepts that users find easier to comprehend. After some thinking, I concluded that I want to try to visualize the amount of news presented in Google News in relation to their geographical metadata.</p>
<p>This is no easy undertaking. But luckily, there have been some work on this already, on the project <a href="http://newsmap.jp/">newsmap</a> by <a href="http://marumushi.com/">Marcos Weskamp</a> and <a href="http://www.danalbritton.com/">Dan Albritton</a>. If I can understand how they dissect the data into regions, I believe the project to be possible. The next step would be to visualize the data in a proper manner.</p>
<h3>Features</h3>
<p>The main feature of this project will to show a world map (perhaps enabling the user to zoom in on continents, revealing countries, and perhaps enabling them to zoom down even further). The map will be populated by figures displaying the distribution of news by size. For example, if there would be more news from the US than from Europe, then the figure representing US would be bigger than Europe’s.</p>
<p>Also, I want to display the distribution by categories fronted by Google News, i.e.&nbsp;world, national, business, technology, sports, entertainment and health. I’m thinking that a pie-chart can show this&nbsp;appropriately. The overall size would be the amount of articles, and the size of each&nbsp;slice&nbsp;would represent the number of news in each category.</p>
<p>Another feature that would be awesome is showing the dimension of time, e.g. a&nbsp;time-lapse. I think to watch the development of the past days, or perhaps even chosen days where certain events happened, would be truly&nbsp;enlightening.</p>
<h2>A personal note – Time</h2>
<p>Before I go into the strategies, I must explain an important aspect in my life, which is time. If you don’t care, jump straight to <a href="#design_decisions">design decisions</a>.</p>
<p>Earlier I’ve written some thoughts on <a href="http://icanhasweb.wordpress.com/2010/11/07/aurora-design-decisions/">design decisions</a> on the Aurora project. I gained some feedback that I want to take into account on developing this project, but more over I’ve gained the experience of trying to start something when not having the time. You see, the Aurora project is still in a starting phase. And a fundamental problem for me to start the lay the foundation is that I don’t feel I have the knowledge needed. Nor, to be honest, the time.</p>
<p>On another&nbsp;side-note, I’ve been developing a concept with a couple of friends of mine for some time. 9 months into the project, and still there had been no real development (we were still talking strategies and business concept). In the end I decided to end the collaboration, not because I didn’t have faith in the concept (I still believe the basic ideas to be really good), but because I didn’t want the project to take time in form of overhead and the anticipation.</p>
<p>Time, I’ve concluded, is perhaps my most precious resource.</p>
<p>In relation to this, I’ve been trying to structure my time. In the fall that were, I tried to conceptualize this with the title 40/40 – 40% on my professional work and 40 points in courses (which actually amounts to 133% work, summing my workload to about 174% to that which is normal). There were incentives that drove me into that workload, but having done that for the past 6 months, I’ve discovered that conceptualizing structures in this way is a really good thing for me. It expresses my choices to people, and lets them know how I wish to prioritize.</p>
<p>I haven’t conceptualized this spring yet, but the content it should express is 40% on my professional work, 35 points in courses, and a 3-week long vacation in February. Also, this includes me involving myself in some big projects, like partaking in the celebration of the University turning 200 years, which include a party September 2. with involve a LOT of people.</p>
<p>To give myself some time to research this project, I’ve decided to start developing (that is, write code) after I return from Thailand on February 22.</p>
<h2><a name="design_decisions"></a>Design decisions</h2>
<p>To create a solid foundations, I’ve decided some strategies for the project which I’ll adhere to.</p>
<h3>Documentation-driven design</h3>
<p>I read about this concept last years <a href="http://24ways.org/2010/documentation-driven-design-for-apis">24 ways</a>, and was really fascinated by the motivations behind it. This requires me to learn <a href="http://code.google.com/p/jsdoc-toolkit/">JsDoc Toolkit</a>, which I think will be really interesting.</p>
<h3>Test-driven development</h3>
<p>In Aurora we decided to not use the features of TDD, a decision which I’ve questioned myself the most. In this project I’m turning around, reading <a href="http://cjohansen.no/">Christian Johansen</a>‘s <a href="http://www.amazon.com/dp/0321683919/">Test-Driven&nbsp;JavaScript&nbsp;Development</a> and using <a href="http://code.google.com/p/js-test-driver/">Google’s JsTestDriver</a>.</p>
<h3>JS required</h3>
<p>Since this project is first and foremost about me learning JS, it will require support of JS. That means I will not adhere to the principles of <a href="http://en.wikipedia.org/wiki/Progressive_enhancement">progressive enhancement</a>.</p>
<h3>Don’t reinvent the wheel</h3>
<p>There are many resources out there that probably have a place in this project. The first and foremost is the use of maps, which I will include through the <a href="http://code.google.com/intl/no-NO/apis/maps/documentation/javascript/">Google Maps JavaScript API</a>.</p>
<p>Also, As I’ve mentioned, the project <a href="http://newsmap.jp/">newsmap</a> have already done some of what I wish to accomplished (although in Flash), so I should send an email to the developer asking if they can contribute me with some tips.</p>
<h3>Do Good Things!</h3>
<p>This covers a lot of things, of course, but my meaning of this is following guidelines such as those described in <a href="http://oreilly.com/catalog/9780596517748">JavaScript: The Good Parts</a>.</p>
<h2>Implementation</h2>
<p>There is much yet to be decided, but I’ve been thinking about tools that would be appropriate for this project (besides the ones mentioned above).</p>
<ul>
<li><a href="http://code.google.com/p/flot/">Flot</a>: Interesting library that produces graphical plots; could be interesting to see how it works, and if perhaps I can use or copy and modify some of its functionalities.</li>
<li><a href="https://github.com/jgeldart/jquery-sparql">jQuery-SPARQL</a>: An interesting attempt to work with data using SPARQL – may have a use in this project</li>
<li><a href="http://vis.stanford.edu/protovis/">Protovis</a>: Perhaps not suitable for my need in visualizing data, I think it can be interesting to dissect it to see how it works.</li>
<li><a href="http://raphaeljs.com/">Raphaël</a>: This project will require working with canvas, a field in which I’m ignorant at the moment. I’ve heard good things about Raphaël, and will do more research whether this is an appropriate tool.</li>
<li><a href="http://code.google.com/p/rdfquery/">rdfQuery</a>: A tool that I believe can be used to work with the data from sources such as <a href="http://www.geonames.org/">GeoNames</a>.</li>
</ul>
