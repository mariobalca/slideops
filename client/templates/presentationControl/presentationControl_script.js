Template.presentationControl.helpers({
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
