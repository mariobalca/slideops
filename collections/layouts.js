Layouts = new Mongo.Collection("layouts");

LayoutSchema = new SimpleSchema({
    name: {type: String},
    data: {type: Object}
});

Layouts.allow({
    insert: function(userId, doc){
        return true;
    }
});

Meteor.methods({
});

Meteor.startup(function(){
    if(Meteor.isServer && Layouts.find().count() === 0){
        Layouts.insert({
            name: "cover",
            data: {
                title: "Title",
                subtitle: "Subtitle"
            }
        });
        Layouts.insert({
            name: "default",
            data: {
                header: "Header",
                paragraph: "Paragraph"
            }
        });
    }
});
