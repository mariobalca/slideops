Presentations = new Mongo.Collection("presentations");

PresentationUserSchema = new SimpleSchema({
    id: {type: String},
    name: {type: String}
});

PresentationLiveSchema = new SimpleSchema({
    current_slide: {type: Number}
})

PresentationSchema = new SimpleSchema({
    name: {type: String},
    public: {type: Boolean},
    live: {type: PresentationLiveSchema},
    slides: {type: [String]},
    owner: {type: PresentationUserSchema},
    islive: {type: Boolean}
});

Presentations.allow({
    insert: function(userId, doc){
        return doc.userId === userId;
    },
    remove: function(userId, doc){
        return true;
    }
});

Meteor.methods({
    'createPresentation': function(presentation){
        check(Meteor.userId(), String);

        presentation.owner = {
            id: Meteor.userId(),
            name: Meteor.user().profile.name
        }

        presentation.live = {
            current_slide: 1
        }
        presentation.slides = [];
        presentation.islive = false;

        check(presentation, PresentationSchema);

        var id = Presentations.insert(presentation);

        // Create title slide
        Meteor.call('createSlide', id, 'cover');
        return id;
    },
    'nextSlide': function(pres_id){
        pres = Presentations.findOne({_id: pres_id});
        slides = pres.slides;
        slide_n = pres.live.current_slide + 1;
        if(slide_n > slides.length){
            return false;
        }
        Presentations.update({_id: pres_id}, {$set: {live: {current_slide: slide_n}}});
    },
    'prevSlide': function(pres_id){
        slide_n = Presentations.findOne({_id: pres_id}).live.current_slide - 1;
        if(slide_n <= 0){
            return false;
        }
        Presentations.update({_id: pres_id}, {$set: {live: {current_slide: slide_n}}});
        return true;
    },
    'presentationLaunch': function(pres_id){
        Presentations.update({_id: pres_id}, {$set: {islive: true}});
    }
});
