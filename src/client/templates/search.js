
/**
 * Created by JS_UbSE on 2016-06-12.
 */

import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './search.html';
import './include/layout.js'


Template.search.onCreated(function bodyOnCreated(){
    Meteor.subscribe('funding');
});



Template.layout.events({
    "submit .search-project":function(event){
        event.preventDefault();
        const target = event.target;
        const searchValue = target.searchVal.value;

        Session.set('searchVal', searchValue);
        console.log(searchValue);
        Router.go('search');
 

    }
});

Template.search.helpers({
    searchFundingInfo(){
        var searchVal = Session.get('searchVal');
        console.log(fundings.find({title:{$regex:searchVal}}));
        return fundings.find({title:{$regex:searchVal}});
    }
});