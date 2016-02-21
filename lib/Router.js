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

Router.route('/edit/:_id', {
    name: 'edit',
    template: 'presentationEdit',
    waitOn: function() {
        return [Meteor.subscribe('slidesForPresentation', this.params._id), Meteor.subscribe("users")];
    },
    data: function() {
        return Presentations.findOne({_id: this.params._id});
    },
    action: function () {
        if(Presentations.findOne({_id: this.params._id}).owner.id != Meteor.userId()){
            this.redirect('home');
        }
        // render all templates and regions for this route
        this.render();
    }
});

Router.route('/control/:_id', {
    template: 'presentationControl',
    name: 'control',
    action: function () {
        if(Presentations.findOne({_id: this.params._id}).owner.id != Meteor.userId()){
            this.redirect('home');
        }
        // render all templates and regions for this route
        this.render();
    }
});

Router.route('/show/:_id', {
    template: 'presentationShow',
    name: 'show'
});

Router.route('/questions/:_id', {
    template: 'presentantionShowQuestion',
    name: 'questions'
});

Router.route('/slides/:_id/', {
    template: 'slide',
    name: 'slides',
    data: function () {
        return Presentations.findOne({_id: this.params._id});
    },
    action: function () {
        if(Presentations.findOne({_id: this.params._id}).owner.id != Meteor.userId()){
            this.redirect('home');
        }
        // render all templates and regions for this route
        this.render();
    }
});
