Template.presentationControl.helpers({
	slides: function() {
		return Slides.find({presentation: {id: Router.current().params._id}});
	},
});

Template.presentationControl.events({
	});

Template.presentationControl.onRendered(function ( ){
	$('ul.tabs').tabs();
	$('select').material_select();
	$('.carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});
})
