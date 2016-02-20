Presentations = new Mongo.Collection("presentations");

PresentationUserSchema = new SimpleSchema({
    id: {type: String},
    name: {type: String}
});

PresentationSchema = new SimpleSchema({
    name: {type: String},
    public: {type: Boolean},
    owner: {type: PresentationUserSchema}
});

Presentations.allow({
    insert: function(userId, doc){
        return doc.userId === userId;
    },
    /*update: function(){
        return true;
    },*/
    remove: function(userId, doc){
        return true;
    }
});

Meteor.methods({
    createPresentation: function(presentation){
        check(Meteor.userId(), String);

        presentation.owner = {
            id: Meteor.userId(),
            name: Meteor.user().profile.name
        }

        check(presentation, PresentationSchema);

        var id = Presentations.insert(presentation);

        // Create title slide
        Meteor.call('createSlide', id, 'cover');
        return id;
    }
});

Meteor.startup(function(){
    if(Meteor.isServer && Presentations.find().count() === 0){
        Presentations.insert({
            name: "Test Presentation",
            public: true,
        });
    }
});
