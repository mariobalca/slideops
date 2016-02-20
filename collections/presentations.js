Presentations = new Mongo.Collection("presentations");

UserSchema = new SimpleSchema({
    id: {type: String},
    name: {type: String}
});

PresentationSchema = new SimpleSchema({
    name: {type: String},
    public: {type: Boolean},
    owner: {type: UserSchema}
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
