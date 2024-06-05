const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    handle : {type : String , required : true , unique : true},
    rank : String,
    rating : Number,
    avatar : String,
    ratingHistory : [
        {
            contestName : String,
            newRating : Number,
            rank : Number,
            data : Date,
        }
    ]
});

const Profile = mongoose.model('Profile' , profileSchema);
module.exports = Profile;