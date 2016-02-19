Router.route('/', {
    template: 'home'
});

Router.route('/login', {
    template: 'login'
});

Router.route('/dashboard', {
    template: 'dashboard'
});

Router.route('/presentations/create', {
    template: 'presentation'
});

Router.route('/presentations/:_id', {
    template: 'presentation'
});

Router.route('/presentations/:_id/slides/create', {
    template: 'slide'
});

Router.route('/presentations/:_id/slides/:_id', {
    template: 'slide'
});
