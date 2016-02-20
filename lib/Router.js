Router.route('/', {
    template: 'dashboard'
});

Router.route('/presentations/:_id/edit', {
    name: 'presentation.edit',
    template: 'presentationEdit',
    waitOn: function() {
        return [Meteor.subscribe('slidesForPresentation', this.params._id)];
    },
    data: function() {
        return Presentations.findOne({_id: this.params._id});
    }
});

Router.route('/presentations/:_id', {
    template: 'presentationShow',
    name: 'presentation.show'
});


Router.route('/presentations/:_id/slides/create', {
    template: 'slide'
});

Router.route('/presentations/:_id/slides/:_id', {
    template: 'slide'
});
