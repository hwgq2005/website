/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-15 12:20:48
 * @version $Id$
 */

define(['zepto','underscore','backbone','../model/model','localStorage'],function ($,_,Backbone,appModel){
	var appCollection=Backbone.Collection.extend({
			model: appModel,
			localStorage: new Backbone.LocalStorage("sites")
			// url:'html/scripts/website.json'
		})
		return new appCollection;
});