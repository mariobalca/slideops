Template.nav.helpers({
	});

Template.nav.events({
	});

Template.nav.onRendered(function ( ){
	$(".dropdown-button").dropdown();
	$(".button-menu").sideNav();
	$(".new-presentation-js").click(function(){
		Meteor.call('createPresentation', {
	        name: 'New Presentation',
	        public: false
	    }, function(error, result) {
	        if(error) {
				alert(error.reason);
	        } else {
	            Router.go('presentation.show', {_id: result});
	        }
	    });
	});
})
