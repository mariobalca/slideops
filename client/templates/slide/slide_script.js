Template.slide.helpers({
    slide_template: function() {
        pres = Presentations.findOne({_id: Router.current().params._id})
        slide_n = pres.live.current_slide;
        slides = pres.slides;
        slide = Slides.findOne({_id: slides[slide_n-1]});
        return 'layout_'+slide.layout.name;
    },
    slide_data: function() {
        console.log('YAY');
        pres = Presentations.findOne({_id: Router.current().params._id})
        slide_n = pres.live.current_slide;
        slides = pres.slides;
        slide = Slides.findOne({_id: slides[slide_n-1]});
        return slide.data;
    },
    slide_number: function() {
        return Presentations.findOne({_id: Router.current().params._id}).live.current_slide;
    }
})

Template.slide.onRendered(function() {
    var stage = document.getElementById('pres-test');
    var mc = new Hammer.Manager(stage);
    var Swipe = new Hammer.Swipe();
    mc.add(Swipe);

    // Increment slide
    mc.on('swipeleft', function(){
        Meteor.call('nextSlide', Router.current().params._id);
    });

    // Go back slide
    mc.on('swiperight', function(){
        Meteor.call('prevSlide', Router.current().params._id);
    })
});
