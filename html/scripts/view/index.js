/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','text!../../template/main.html','../collection/collection','../model/model','css!../../style/ratchet/ratchet.css','css!../../style/app.css'],
	function ($,_,Backbone,indexViewTmp,appCollection,appModel){

		var indexView=Backbone.View.extend({
			el:'#main',
			template:_.template(indexViewTmp),
			events: {
				'click .index-site .bar .isedit':'touchstart',
				'click .index-site .table-list .table-view-cell .add':'add'
			},
			rander:function(){ 
				var _this=this;
				$.get('html/scripts/website.json', function(data) {
				  	$(_this.el).html(_this.template({data:data}));
				},'json');
			},
			touchstart:function(e){
				var _left=$(e.currentTarget),
					isedit=_left.data('isedit');
				if (isedit == false) {
					// var _html='<a href="javascript:;" class="btn btn-negative add" >添加</a>';
					// $('.table-view li').append(_html);
					 $('.table-view li .add').removeClass('hide');
					_left.data('isedit','true').text('完成');

				}else{
					 $('.table-view li .add').addClass('hide');
					_left.data('isedit','false').text('添加');
				};
			},	
			add:function(e){
				var _left=$(e.currentTarget);
				var isadd=_left.data('isadd');
				if (!isadd) {
					var site=JSON.parse(_left.data('site').replace(/'/g,'"'));
					appCollection.create(site);
					_left.data('isadd','true').text('打开')
					.attr('href',site.weburl)
					.attr('class','btn btn-positive add');
					event.preventDefault();
				};
				
			}
		
		})
		return new indexView;
});