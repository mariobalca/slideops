Template.layout_chart.helpers({
	answer1Votes: function(){
        pres = Presentations.findOne({_id: Router.current().params._id});
		slide = Slides.findOne({_id: pres.slides[pres.live.current_slide-1]});
        count = 0;
        for(i=0;i<slide.data.user_answers.length;++i){
            if(slide.data.user_answers[i] == slide.data.answer1)
                count++
        }
		return count;
	},
    answer2Votes: function(){
        pres = Presentations.findOne({_id: Router.current().params._id});
		slide = Slides.findOne({_id: pres.slides[pres.live.current_slide-1]});
        count = 0;
        for(i=0;i<slide.data.user_answers.length;++i){
            if(slide.data.user_answers[i] == slide.data.answer2)
                count++
        }
		return count;
	},
    answer3Votes: function(){
        pres = Presentations.findOne({_id: Router.current().params._id});
		slide = Slides.findOne({_id: pres.slides[pres.live.current_slide-1]});
        count = 0;
        for(i=0;i<slide.data.user_answers.length;++i){
            if(slide.data.user_answers[i] == slide.data.answer3)
                count++
        }
		return count;
	},
});
