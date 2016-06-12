
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



Template.search.helpers({
    searchFundingInfo(){
        var searchVal = Session.get('searchVal');
        return fundings.find({"title":/.*searchVal.*/}, {sort: {createdAt: 1}});
    }
});