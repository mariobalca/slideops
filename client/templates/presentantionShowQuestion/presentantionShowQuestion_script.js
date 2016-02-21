Template.presentantionShowQuestion.helpers({
	relativeUrl: function(param) {
		if (param == 'back')
			return '/presentations/' + Router.current().params._id;
	}
	});

Template.presentantionShowQuestion.events({
	});

Template.presentantionShowQuestion.onRendered(function ( ){
	$('ul.tabs').tabs();
	$('select').material_select();
})
