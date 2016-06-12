/**
 * Created by JS_UbSE on 2016-06-03.
 */
import { Mongo } from 'meteor/mongo';

export const fundings = new Mongo.Collection('funding');



//
// if(Meteor.isServer){
//     Meteor.publish('funding', function () {
//         return fundings.find({});
//     });
//
// }