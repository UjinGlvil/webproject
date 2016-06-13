/**
 * Created by JS_UbSE on 2016-06-12.
 */

import {fundings} from '../../imports/api/fundings';
import './invest.html';




Template.invest.events({
    'submit .payment':function(event) {

        event.preventDefault();

         var target = event.target;
         var paymentMoney = Number(target.paymentMoney.value);
         Meteor.call("submitPayment",target,paymentMoney,this);

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
