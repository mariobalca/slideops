Router.configure({
    loadingTemplate: 'loading',
    waitOn: function() {
        return [Meteor.subscribe("users")];
    }
})

Router.route('/', {
    name: 'home',
    template: 'dashboard',
});

Router.route('/presentations/:_id/edit', {
    name: 'presentation.edit',
    template: 'presentationEdit',
    waitOn: function() {
        return [Meteor.subscribe('slidesForPresentation', this.params._id), Meteor.subscribe("users")];
    },
    data: function() {
        return Presentations.findOne({_id: this.params._id});
    }
});

Router.route('/presentations/:_id/control', {
    template: 'presentationControl',
    name: 'presentation.control'
});

Router.route('/presentations/:_id/pres', {
    template: 'presentationPres',
    name: 'presentation.pres'
});

Router.route('/presentations/:_id', {
    template: 'presentationShow',
    name: 'presentation.show'
});

Router.route('/presentations/:_id/question', {
    template: 'presentantionShowQuestion',
    name: 'presentation.show.question'
});

Router.route('/presentations/:_id/slides', {
    template: 'slide',
    name: 'presentation.slides',
    data: function () {
        return Presentations.findOne({_id: this.params._id});
    }
});

Router.route('/presentations/:_id/slides/:_id', {
    template: 'slide'
});
