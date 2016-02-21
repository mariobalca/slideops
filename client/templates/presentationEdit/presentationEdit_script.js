var active_slide_js = null;

Template.presentationEdit.helpers({
	slides: function() {
		return Slides.find({presentation: {id: Router.current().params._id}});
	},
	current_layout: function(param) {
		return Slides.findOne({_id: Session.get('activeSlideId')}).layout.name == param;
	}
});

Template.presentationEdit.events({
	'click .new-slide-js': function(){
		Meteor.call('createSlide', Router.current().params._id, 'default');
	},
	'click .select-slide-js': function(event) {
		Session.set('activeSlideId', $(event.currentTarget).data('id'));
		$('.select-slide-js').removeClass('active');
		$(event.currentTarget).addClass('active');
	}
});

Template.presentationEdit.onCreated(function (){
	Session.set('activeSlideId', Slides.findOne({presentation: {id: Router.current().params._id}})._id);
})

Template.presentationEdit.onRendered(function (){
	$('select').material_select();
	$('.select-slide-js').first().addClass('active');
});
