/**
 * Created by JS_UbSE on 2016-06-03.
 */



import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';


import './funding.html';

var player = null;

Template.contract.onCreated(function bodyOnCreated() {
    Meteor.subscribe('fundingByUserID', Meteor.userId());
});

Template.funding.helpers({
    getMyInvestInfo(){
        return fundings.find({owner:Meteor.userId()});
    }
});

Template.funding.events({
    "click .showvideo":function (event) {
        const evt = event.target;
        const datas = fundings.find({owner:Meteor.userId()}).fetch();
        var index = evt.getAttribute('data-value');

        var video_id = datas[index].yburl;

        console.log(index);

        if(player == null)
        {
            player = new YT.Player("player", {
                height: "500",
                width: "100%",
                videoId: video_id,
                events: {
                    onReady: function (event) {
                        event.target.playVideo();
                    }
                }
            });
        }
        else{
            player.loadVideoById({videoId:video_id});
        }
    },
    "click .btnclose":function(event) {
        player.stopVideo();
    }
 });