/**
 * Created by Source on 2016-05-29.
 */
Router.configure({
   layoutTemplate: 'layout',
    loadingTemplate:'loading',
    notFoundTemplate:'notFound'
});

Router.route('/',{name:'home'});