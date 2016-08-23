require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/night.css');

require('reveal.js/lib/js/head.min.js');
window.Reveal = require('reveal.js');

//required revealjs plugins
require('reveal.js/plugin/notes/notes.js');
require('reveal.js/plugin/notes/notes.html');
//require('reveal.js/plugin/zoom-js/zoom.js');

require('!!file?name=./img/[name].[ext]!../img/share.jpg');

Reveal.initialize({
	controls: false,
	progress: false,
	history: true,
	center: true,
	transition: 'convex',
	dependencies: [
		{ src: './plugin/notes.js', async:true }
	]
});
