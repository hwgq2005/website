/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-21 13:42:47
 * @version $Id$
 */
require.config({
	baseUrl:'html/scripts',
	paths: {
		'zepto': 'frames/zepto.min',
		'underscore': 'frames/underscore',
		'backbone': 'frames/backbone',
		'localStorage': 'frames/backbone.localStorage-min',
		'text': 'frames/text'
	},
	shim: {
		zepto: {
			exports: '$',
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['zepto','underscore'],
			exports: 'Backbone'
		}
	},
	map: {
        '*': {
            'css': 'frames/css'
        }
    }
});
require(['app/router'],function(router){
	router.initlalize();
})