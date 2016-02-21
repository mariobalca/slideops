var active_slide_js = null;

Template.presentationEdit.helpers({
	slides: function() {
		slides = []
		pslides = Presentations.findOne({_id: Router.current().params._id}).slides;
		for(i=0;i<pslides.length;++i){
			slides.push(Slides.findOne({_id: pslides[i]}));
		}
		return slides;
	},
	slide_layout: function(param) {
		return Slides.findOne({_id: Session.get('activeSlideId')}).layout.name == param;
	},
	slide_data: function(param){
		return Slides.findOne({_id: Session.get('activeSlideId')}).data
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

		slide = Slides.findOne({_id: Session.get('activeSlideId')})
		$('.layout').removeClass('active');
		$('#'+slide.layout.name).addClass('active');
	},
	'click .layout': function(event) {
		Meteor.call('updateLayout', Session.get('activeSlideId'), $(event.currentTarget).data("layout"))
		$('.layout').removeClass('active');
		$(event.currentTarget).addClass('active');
	},
	'keyup .slide-main input': function(event) {
		data = Slides.findOne({_id: Session.get('activeSlideId')}).data;
		data[$(event.currentTarget).data('field')] = event.currentTarget.value;
		Meteor.call('updateData', Session.get('activeSlideId'), data);
	},

});

Template.presentationEdit.onCreated(function (){
	Session.set('activeSlideId', Slides.findOne({presentation: {id: Router.current().params._id}})._id);
})

Template.presentationEdit.onRendered(function (){
	$('select').material_select();
	$('.select-slide-js').first().addClass('active');
	slide = Slides.findOne({_id: Session.get('activeSlideId')})
	$('.layout').removeClass('active');
	$('#'+slide.layout.name).addClass('active');
});
