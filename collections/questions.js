Questions = new Mongo.Collection("questions");

QuestionsSchema = new SimpleSchema({
    id: {type: String},
    data: {type: Object},
    answers: {type: Oject}
});


Questions.allow({
    insert: function(userId, doc){
        return true;
    },
    /*update: function(){
        return true;
    },*/
    remove: function(userId, doc){
        return true;
    }
});

Meteor.methods({
    createQuestion: function(slide_id, data){
        check(Meteor.userId(), String);

        question = {
            data: data
        }

        var id = Questions.insert(question);
        return id;
    },
    updateData: function(data){
        Questions.update({_id: p}, {$set: {data: data}});
    },
    anwswer: function(data, ) {

    }
});
