Template.presentationShow.helpers({
	relativeUrl: function(param) {
		if (param == 'question')
			return '/question/' + Router.current().params._id;
	},
	slides: function() {
		return Slides.find({presentation: {id: Router.current().params._id}});
	},
	current_layout: function(param) {
		pres = Presentations.findOne({_id: Router.current().params._id});
		slide = Slides.findOne({_id: pres.slides[pres.live.current_slide-1]});
		return slide.layout.name == param;
	}
});

Template.presentationShow.events({
});

Template.presentationEdit.onCreated(function (){

})

Template.presentationShow.onRendered(function ( ){
	 $('ul.tabs').tabs();
	 $('select').material_select();
})
