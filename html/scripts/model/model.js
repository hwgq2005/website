/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-15 10:47:42
 * @version $Id$
 */

define(['zepto','underscore','backbone'],function ($,_,Backbone){
		var appModel=Backbone.Model.extend({
			initialize: function () {
                //构造函数 
                this.on('destroy', function () {
                    console.log('正在调用destroy方法');
                });
            },
			url:'',
			idAttribute:'id'
		})
		return appModel;
});	