/**
 * Created by Source on 2016-05-29.
 */
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