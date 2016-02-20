Template.nav.helpers({
});

Template.nav.events({
	'click .facebook-signin-js': function() {
		Meteor.loginWithFacebook({loginStyle: 'popup'});
  	},
  	'click .logout-button-js': function() {
		Meteor.logout();
  	},
	'click .new-presentation-js': function() {
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
	}
});

Template.nav.onRendered(function ( ){
	$(".dropdown-button").dropdown();
	$(".button-menu").sideNav();
});
