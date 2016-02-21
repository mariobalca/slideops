Questions = new Mongo.Collection("questions");

QuestionsSchema = new SimpleSchema({
    id: {type: String},
    user_answers: {type: [String]},
    slide: {type: Object}
});


Questions.allow({
    insert: function(userId, doc){
        return true;
    },
    remove: function(userId, doc){
        return true;
    }
});

Meteor.methods({
    createQuestion: function(slide_id){
        check(Meteor.userId(), String);

        question = {
            slide: {id: slide_id},
            user_answers: []
        }

        var id = Questions.insert(question);
        return id;
    },
    userAnwswer: function(qid, answer) {
        ans = Questions.find({_id: qid}).user_answers;
        ans.push(answer);
        Questions.update({_id: qid}, {$set: {user_answers: ans}});
    }
});
