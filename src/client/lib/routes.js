/**
 * Created by Source on 2016-05-29.
 */

import {fundings} from '../../imports/api/fundings';

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate:'loading',
    notFoundTemplate:'notFound'
});

Router.route('/',{name:'home'});
Router.route('/about',{name:'about'});
Router.route('/contract',{name:'contract'},
    Meteor.subscribe('funding')
);
Router.route('/login',{name:'login'});
Router.route('/join',{name:'join'});
Router.route('/funding', {name: 'funding',
    data:function () {
        Meteor.subscribe('fundingByUserID',Meteor.userId());
    }
});
Router.route('/enroll',{name:'enroll'});
Router.route('/search',{name:'search'});
Router.route('/invest/:_id',{
    name: 'invest',
    data:function () {
        Meteor.subscribe('fundingByFundingID',this.params._id);
        return fundings.findOne({_id: this.params._id});
    }
});