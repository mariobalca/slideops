Meteor.publish("slidesForPresentation", function(pres_id){
    return Slides.find({presentation: {id: pres_id}});
})
