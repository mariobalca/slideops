Router.route('/', {
    template: 'dashboard'
});

Router.route('/presentations/:_id/edit', {
    template: 'presentationEdit',
    name: 'presentation.edit'
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

Router.route('/presentations/:_id/slides/create', {
    template: 'slide'
});

Router.route('/presentations/:_id/slides/:_id', {
    template: 'slide'
});
