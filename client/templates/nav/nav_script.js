Template.nav.helpers({
	});

Template.nav.events({
	});

Template.nav.onRendered(function ( ){
	$(".dropdown-button").dropdown();
	$(".button-menu").sideNav();
})
