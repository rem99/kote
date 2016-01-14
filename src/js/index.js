requirejs.config({
	baseUrl: '/frontend-deploy-workshop.git/src',
	paths: {
		text:"./libs/text/text",
		jquery:"./libs/jquery/dist/jquery.min",
		underscore:"./libs/underscore/underscore-min",
		backbone:"./libs/backbone/backbone-min"
	}
});
require(["./src/js/app.js"]);
