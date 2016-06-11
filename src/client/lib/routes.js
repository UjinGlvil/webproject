/**
 * Created by Source on 2016-05-29.
 */
//import { FlowRouter } from 'meteor/kadira:flow-router';
//import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import { AccountsTemplates } from 'meteor/useraccounts:core';


Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate:'loading',
    notFoundTemplate:'notFound'
});

Router.route('/',{name:'home'});
Router.route('/about',{name:'about'});
Router.route('/contract',{name:'contract'});
Router.route('/login',{name:'login'});
Router.route('/join',{name:'join'});
Router.route('/funding',{
    name:'funding',
    waitOn: function () {
        console.log("나의 펀딩 정보를 받아오는 중입니다.");
}});
Router.route('/enroll',{name:'enroll'});