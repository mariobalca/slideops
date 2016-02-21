Template.presentationShow.helpers({
	relativeUrl: function(param) {
		if (param == 'question')
			return '/question/' + Router.current().params._id;
	},
	slides: function() {
		return Slides.find({presentation: {id: Router.current().params._id}});
	},
	current_layout: function(param) {
		return Slides.findOne({_id: Session.get('activeSlideId')}).layout.name == param;
	}
});

Template.presentationShow.events({
});

Template.presentationEdit.onCreated(function (){
	Session.set('activeSlideId', Slides.findOne({presentation: {id: Router.current().params._id}})._id);
})

Template.presentationShow.onRendered(function ( ){
	 $('ul.tabs').tabs();
	 $('select').material_select();
})
