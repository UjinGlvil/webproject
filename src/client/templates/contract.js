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
        Meteor.subscribe('fundingAll');
        console.log(fundings.find({}).fetch());
        return fundings.find({}, {sort: {createdAt: 1}});
    }
});
