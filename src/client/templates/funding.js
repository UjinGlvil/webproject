
import {Template} from 'meteor/templating';
import {fundings} from '../../imports/api/fundings';

import './funding.html';


Template.funding.helpers({
    getMyInvestInfo(){
        Meteor.subscribe('fundingByUserID',Meteor.userId());
        return fundings.find({});
    }
});
