/**
 * Created by JS_UbSE on 2016-06-12.
 */
import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/fundings';

import './contract.html';

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
});

Template.contract.helpers({
    getFundingInfo(){
        Meteor.subscribe('fundingByFundingID','');
        console.log(fundings.find({}).fetch());
        return fundings.find({}, {sort: {createdAt: 1}});
    }
});

Template.contract.events({
    "click .showvideo":function (event) {
        const evt = event.target;
        const datas = fundings.find({}).fetch();
        var index = evt.getAttribute('data-value');

        var video_id = datas[index].yburl;

        console.log(video_id);

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