Meteor.publish("users", function(){
    return Meteor.users.find();
})

Meteor.publish("slidesForPresentation", function(pres_id){
    return Slides.find({presentation: {id: pres_id}});
})
