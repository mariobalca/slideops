Slides = new Mongo.Collection("slides");

SlidesPresentationSchema = new SimpleSchema({
    id: {type: String}
});

SlidesLayoutSchema = new SimpleSchema({
    id: {type: String}
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
            id: layout._id
        }

        slide.data = layout.data;

        //check(slide, SlideSchema);

        var id = Slides.insert(slide);
        return id;
    }
});
