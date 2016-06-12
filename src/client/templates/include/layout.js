/**
 * Created by JS_UbSE on 2016-06-12.
 */
Session.setDefault('searchVal');

import {Template} from 'meteor/templating';

import './layout.html';

Template.layout.onCreated(function bodyOnCreated(){
    Meteor.subscribe('fundingAll');
});

Template.layout.events({
    "submit .search-project":function(event){
        event.preventDefault();
        const target = event.target;
        const searchValue = target.searchVal.value;

        Session.set('searchVal', searchValue);

        Router.go('search');


    }
});
// Template.layout.events({
//     "submit .search-project":function(event){
//         event.preventDefault();
//
//         const target = event.target;
//         const searchValue = target.searchVal.value;
//         Session.set('searchVal', searchValue);
//         console.log(searchValue);
//         location.href='search';
//
//     }
// });