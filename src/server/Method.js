/**
 * Created by JS_UbSE on 2016-06-12.
 */
import {fundings} from '../imports/api/fundings.js';


Meteor.methods({
    submitPayment(target, paymentMoney, thiss){


        fundings.update(
            {"_id":thiss._id},
            {$inc: {"currentInvest":paymentMoney}}
        );

        var cValue = thiss.currentInvest+paymentMoney;
        var tValue = thiss.targetInvest;
        var rate = thiss.rate;

        rate = Math.round(cValue / tValue * 100);

        console.log("rate: "+rate)
        fundings.update(
            {"_id":thiss._id},
            {$set:{"rate":rate}}
        );

        console.log("cVal: "+cValue + "  tVal: "+tValue);
        console.log("rate: "+rate+"%");

    },
});