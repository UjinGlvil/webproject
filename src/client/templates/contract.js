/**
 * Created by JS_UbSE on 2016-06-12.
 */
import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './contract.html';

Template.contract.onCreated(function bodyOnCreated(){
    Meteor.subscribe('funding');
});

Template.contract.helpers({
    getFundingInfo(){
        console.log("enroll helpers 호출");
        return fundings.find({}, {sort: {createdAt: 1}});
    }
});