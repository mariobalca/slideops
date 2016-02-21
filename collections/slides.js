Slides = new Mongo.Collection("slides");

SlidesPresentationSchema = new SimpleSchema({
    id: {type: String}
});

SlidesLayoutSchema = new SimpleSchema({
    id: {type: String},
    name: {type: String}
});

SlideSchema = new SimpleSchema({
    layout: {type: SlidesLayoutSchema},
    presentation: {type: SlidesPresentationSchema},
    data: {type: Object}
});

Slides.allow({
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
    createSlide: function(pres_id, layout_name){
        check(Meteor.userId(), String);

        slide = {}
        slide.presentation = {
            id: pres_id
        }

        layout = Layouts.findOne({name: layout_name});
        slide.layout = {
            id: layout._id,
            name: 'layout_'+layout_name
        }

        slide.data = layout.data;

        //check(slide, SlideSchema);

        var id = Slides.insert(slide);

        slides = Presentations.findOne({_id: pres_id}).slides;
        slides.push(id);
        Presentations.update({_id: pres_id}, {$set: {slides: slides}});
        return id;
    },
    updateData: function(slide_id, data){
        Slides.update({_id: slide_id}, {$set: {data: data}});
    },
    updateLayout: function(slide_id, layout_name){
        console.log(layout_name);
        layout = Layouts.findOne({name: layout_name});
        lay = {
            id: layout._id,
            name: 'layout_'+layout_name
        };
        Slides.update({_id: slide_id}, {$set: {layout: lay}});
        Slides.update({_id: slide_id}, {$set: {data: layout.data}});
    },
    userAnwswer: function(slide_id, answer) {
        data = Slides.findOne({_id: slide_id}).data;
        ans = data.user_answers;
        if(ans == undefined)
            ans = [];
        ans.push(answer);
        data.user_answers = ans;
        Slides.update({_id: slide_id}, {$set: {data: data}});
    }
});
