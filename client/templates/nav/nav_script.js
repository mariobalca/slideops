Template.nav.helpers({
	isEdit: function() {
		if (Router.current().route.getName() == 'edit')
			return true;
	},
	relativeUrl: function(param) {
		if(param == 'slides')
			return '/slides/' + Router.current().params._id + '';
	},
});

Template.nav.events({
	'click .facebook-signin-js': function() {
		Meteor.loginWithFacebook({loginStyle: 'redirect'});
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
	            Router.go('edit', {_id: result});
	        }
	    });
	}
});

Template.nav.onRendered(function ( ){
	$(".dropdown-button").dropdown();
	$(".button-menu").sideNav();
	$('.modal-trigger').leanModal();
});
