/**
 * Created by JS_UbSE on 2016-06-03.
 */
import {Template} from 'meteor/templating';

import {fundings} from '../../imports/api/Database.js';



Template.funding.helpers({

    setFundingInfo(){
        var rate = [];
        fundings.find({}).forEach(function(docs){
           console.log("docs. : "+  docs.invest);
            rate.push(docs.invest);
            console.log(10/docs.invest*100);
        });
        // db 값 하나하나씩 뽑아낼때 쓰는거

        

        return fundings.find({}, {limit: 3, sort: {title: 1}});
    },
    getRate(){
        var invest = fundings.invest;
        console.log(invest);
    }

});
// Template.funding.events({
//     "click .reset": function (event) {
//         console.log("초기화");
//         fundings.remove({});
//     }
//
// });