import {fundings} from '../imports/api/fundings';

Meteor.publish('funding',function (id) {
    return fundings.find({_id:id});
});