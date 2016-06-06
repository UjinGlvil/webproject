/**
 * Created by JS_UbSE on 2016-06-03.
 */
import { Template } from 'meteor/templating';

import { fundings } from '../../imports/api/funding.js';


Template.funding.helpers({

    setFundingInfo(){

        // return fundings.find({}, {limit : 3}).sort({title : -1});
        return fundings.find({}, {limit : 3, sort : {title : 1}});
    },

});