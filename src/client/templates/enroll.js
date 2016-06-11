/**
 * Created by JS_UbSE on 2016-06-06.
 */

import { Template } from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './enroll.html';

Template.enroll.events({
    "submit .enroll-project":function (event) {

//        event.preventDefault();
        const target = event.target;
        const title = target.title.value;
        const targetInvest = target.invest.value;

        const content = target.content.value;

        console.log(title);
        console.log(invest);
        console.log(content);

        if(title==='' || invest==='' || content ===' '){
            event.preventDefault();
            alert("모든 내용을 다 채우세요.");
            return;
        }
        fundings.insert({owner: Meteor.userId(),username: Meteor.user().username ,title,content,targetInvest,currentInvest:"0", rate:"0",createdAt: new Date()});

        console.log("뒤로가라");
        history.back();
        
    }
        
});
