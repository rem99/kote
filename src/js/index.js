requirejs.config({
	baseUrl: '/frontend-deploy-workshop.git/src',
	paths: {
		text:"./libs/text",
		jquery:"./libs/jquery.min",
		underscore:"./libs/underscore-min",
		backbone:"./libs/backbone-min"
	}
});
require(["./src/js/app.js"]);
