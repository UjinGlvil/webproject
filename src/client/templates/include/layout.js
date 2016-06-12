/**
 * Created by JS_UbSE on 2016-06-12.
 */
Session.setDefault('searchVal');

import {Template} from 'meteor/templating';

import {fundings} from '../../../imports/api/fundings';

import './layout.html';

Template.layout.onCreated(function bodyOnCreated(){
    Meteor.subscribe('funding');
});


Template.layout.events({
    "submit .search-project":function(event){
        const target = event.target;
        event.preventDefault();
        const searchValue = target.searchVal.value;
        Session.set('searchVal', searchValue);
        console.log(searchValue);
    }
});