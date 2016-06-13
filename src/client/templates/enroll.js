/**
 * Created by JS_UbSE on 2016-06-06.
 */

import { Template } from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './enroll.html';

Template.enroll.events({
    "submit .enroll-project":function (event) {
        const target = event.target;
        const title = target.title.value;
        const targetInvest = target.invest.value;
        const content = target.content.value;
        const yburl = target.url.value;

        console.log(target);
        console.log("username: "+Meteor.userId());

        if(title==='' || targetInvest==='' || content ===' ' || yburl === ''){
            event.preventDefault();
            alert("모든 내용을 다 채우세요.");
            return;
        }
        fundings.insert({
            owner: Meteor.userId(),
            title,
            content,
            targetInvest,
            yburl,
            currentInvest:0,
            rate:"0",
            createdAt: new Date()
        });
        history.back();
    }
});
