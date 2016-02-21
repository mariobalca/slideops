/*Questions = new Mongo.Collection("questions");

QuestionsSchema = new SimpleSchema({
    id: {type: String},
    data: {type: Object},
    answers: {type: [String]},
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
    createQuestion: function(slide_id, data){
        check(Meteor.userId(), String);

        question = {
            data: data,
            answers: [],
            slide: {id: slide_id}
        }

        var id = Questions.insert(question);
        return id;
    },
    updateData: function(qid, data){
        Questions.update({_id: qid}, {$set: {data: data}});
    },
    anwswer: function(qid, answer) {
        ans = Questions.find({_id: qid}).answers;
        ans.push(answer);
        Questions.update({_id: qid}, {$set: {answers: ans}});
    }
});*/
