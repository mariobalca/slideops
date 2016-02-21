Template.presentationShow.helpers({
	relativeUrl: function(param) {
		if(param == 'question')
			return Router.current().url + '/question';
	}
});

Template.presentationShow.events({
});

Template.presentationShow.onRendered(function ( ){
	 $('ul.tabs').tabs();
	 $('select').material_select();
})
