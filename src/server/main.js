import {fundings} from '../imports/api/fundings';


Meteor.publish('fundingAll',function () {
    return fundings.find({});
});
Meteor.publish('fundingByFundingID',function (id) {
    return fundings.find({_id:id});
});
Meteor.publish('fundingByUserID',function(owner){
    return fundings.find({owner:owner});
});