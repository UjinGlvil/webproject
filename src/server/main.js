import {fundings} from '../imports/api/fundings';

Meteor.publish('funding',function () {
    return fundings.find({});
})

Meteor.publish('funding',function (id) {
    return fundings.find({_id:id});
});
Meteor.publish('fundingByUserID',function(owner){
    return fundings.find({owner:owner});
});