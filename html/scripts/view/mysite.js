/*
 *
 * @authors H君 (qq:262281610)
 * @date    2014-10-23 19:54:33
 * @version $Id$
 */
define(['zepto','underscore','backbone','../collection/collection','text!../../template/mysite.html','css!../../style/ratchet/ratchet.css','css!../../style/app.css'],
	function ($,_,Backbone,appCollection,mysiteViewTmp){
		var indexView=Backbone.View.extend({
			el:'#main ',
			template:_.template(mysiteViewTmp),
			events: {
				'click #mysite .bar .isedit':'touchstart',
				'click #mysite .table-list .table-view-cell .del':'del'
			},
			rander:function(){ 
				var _this=this;
				 appCollection.fetch({
                      success:function(model,response){
                      	$(_this.el).html(_this.template({data:response}));
                      }
                  })
				
			},
			touchstart:function(e){
				var _left=$(e.currentTarget),
					isedit=_left.data('isedit');
				if (isedit === false) {
					$('.table-view li .del').removeClass('hide');
					_left.data('isedit','true').text('完成');

				}else{
					$('.table-view li .del').addClass('hide');
					_left.data('isedit','false').text('编辑');
				};
			},	
			del:function(e){
				var _left=$(e.currentTarget);
				var id=_left.data('id');
				var site=appCollection.get(id);
				site.destroy({
					success:function(data){
						_left.parent().remove()
					}
				})
				event.preventDefault();
			}
		
		})
		return new indexView;
});