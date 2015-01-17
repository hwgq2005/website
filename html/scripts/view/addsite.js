/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','text!../../template/add.html','../collection/collection','../model/model','css!../../style/ratchet/ratchet.css'],
	function ($,_,Backbone,addSiteTmp,appCollection,appModel){
		var addView=Backbone.View.extend({
			el:'#main',
			template:_.template(addSiteTmp),
			events: {
				'click #subMit':'saveSite'
			},
			rander:function(){ 
				$(this.el).html(this.template());
			},
			saveSite:function(e){
				var _left=$(e.currentTarget),
					sid=$('#siteId').val(),
					name=$('#siteName').val(),
					type=$('#siteType').val(),
					url=$('#siteUrl').val();
				var appModele=new appModel({
					id:sid,
					name:name,
					type:type,
					url:url
				});
				// alert('sid:'+sid+'name:'+name+'type:'+type+'url:'+url);
				appModele.url=appModele.url+'save';
				appModele.save({
		            success: function (model, response) {
		             	console.log(model)
		            },
		            error: function (error) {
		                console.log("保存数据出现异常");
		            },
		            wait:true
		        });
			}
		})
		return new addView;
});