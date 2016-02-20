Router.route('/', {
    template: 'dashboard'
});

Router.route('/presentations/:_id/edit', {
    template: 'presentationEdit',
    name: 'presentation.edit'
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
