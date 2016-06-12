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
        $('.inputPay').val('');

    },
    'keydown .form-control.inputPay' : function(event){
        var keyCode = event.keyCode;
    
        if( ( keyCode>=48 && keyCode<=57) || ( keyCode>=96 && keyCode<=105 ) || keyCode===8 || keyCode===46 || keyCode===37 || keyCode===39 )
            return;
        else
            return false;
    }
});
Template.invest.helpers({

});
