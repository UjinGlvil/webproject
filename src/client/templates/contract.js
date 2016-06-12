/**
 * Created by JS_UbSE on 2016-06-12.
 */
import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './contract.html';

// Template.contract.onCreated(function bodyOnCreated(){
//     Meteor.subscribe('funding');
// });

Template.contract.helpers({
    getFundingInfo(){
        Meteor.subscribe('funding');
        return fundings.find({}, {sort: {createdAt: 1}});
    }
});
Template.contract.events({
    'click .invertBtn':function(event){
        Session.set('targetInvest',event.target);
    }
});