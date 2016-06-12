/**
 * Created by JS_UbSE on 2016-06-03.
 */



import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';


import './funding.html';

// Template.funding.onCreated(function bodyOnCreated(){
//     //this.state = new ReactiveDict();
//     Meteor.subscribe('funding');
// });

Template.contract.onCreated(function bodyOnCreated() {
    Meteor.subscribe('fundingByUserID', Meteor.userId());
});

Template.funding.helpers({
    getMyInvestInfo(){
        console.log(Meteor.userId());
        //console.log(fundings.find({}).fetch());
        return fundings.find({owner:Meteor.userId()});
    }
});
// Template.funding.events({
//     "click .reset": function (event) {
//         console.log("초기화");
//         fundings.remove({});
//     }
//
// });