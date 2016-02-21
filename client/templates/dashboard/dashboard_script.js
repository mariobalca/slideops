Template.dashboard.helpers({
	all_presentations: function(){
		return Presentations.find();
	},
	user_presentations: function(){
		console.log(Meteor.userId());
		return Presentations.find({owner: {id: Meteor.userId()}})
	},
	live_presentations: function(){
		return Presentations.find({islive: true})
	},
	slide: function(slide_id){
		return Slides.find({_id: slide_id});
	}
});

Template.dashboard.events({
});

Template.dashboard.onRendered(function ( ){
	$('ul.tabs').tabs();
})
