/**
 * Created by JS_UbSE on 2016-06-03.
 */



import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './funding.html';

Template.funding.onCreated(function bodyOnCreated(){
    
    Meteor.subscribe('funding');
});

Template.funding.helpers({

    setFundingInfo(){
        console.log("펀딩 정보 추출");
        return fundings.find({}, {limit: 3, sort: {title: 1}});
    }

});
// Template.funding.events({
//     "click .reset": function (event) {
//         console.log("초기화");
//         fundings.remove({});
//     }
//
// });