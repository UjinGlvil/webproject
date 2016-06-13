
/**
 * Created by JS_UbSE on 2016-06-12.
 */

import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './search.html';
import './include/layout.js'



Template.search.helpers({
    searchFundingInfo(){
        Meteor.subscribe('fundingAll');
        var searchVal = Session.get('searchVal');
        console.log(fundings.find({title:{$regex:searchVal}}));
        return fundings.find({title:{$regex:searchVal}});
    }
});