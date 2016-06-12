/**
 * Created by JS_UbSE on 2016-06-12.
 */

import {fundings} from '../../imports/api/fundings';
import './invest.html';

Session.setDefault('targetInvest');


Template.invest.events({
    'submit .payment':function(event) {
        // console.log(document.getElementById("payment").hasAttribute("data-dismiss"));
        // if(document.getElementById("payment").hasAttribute("data-dismiss")){
        //     $('#payment').removeAttr("data-dismiss");
        //     console.log("test");
        // }


        event.preventDefault();
        console.log("payment 이벤트 실행");
        var target = event.target;
        var paymentMoney = Number(target.paymentMoney.value);


        fundings.update(
            {"_id":this._id},
            {$inc: {"currentInvest":paymentMoney}}
        );



        var cValue = this.currentInvest+paymentMoney;
        var tValue = this.targetInvest;
        var rate = this.rate;

        rate = Math.round(cValue / tValue * 100);


        console.log("rate: "+rate)
        fundings.update(
            {"_id":this._id},
            {$set:{"rate":rate}}
        );



        console.log("cVal: "+cValue + "  tVal: "+tValue);
        console.log("rate: "+rate+"%");

        $('#payment').attr("data-dismiss", "modal");
        $('#payment').trigger('click');
        $('#payment').removeAttr("data-dismiss");
    }
});

function showKeyCode(event) {
    event = event || window.event;
    var keyID = (event.which) ? event.which : event.keyCode;

    1
    if( ( keyID >=48 && keyID <= 57 ) || ( keyID >=96 && keyID <= 105 ) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 )
    {
        return;
    }
    else
    {
        return false;
    }
}
