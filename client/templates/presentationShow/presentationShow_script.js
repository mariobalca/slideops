Template.presentationShow.helpers({
	relativeUrl: function(param) {
		if (param == 'question')
			return '/question/' + Router.current().params._id;
	}
});

Template.presentationShow.events({
});

Template.presentationShow.onRendered(function ( ){
	 $('ul.tabs').tabs();
	 $('select').material_select();
})
