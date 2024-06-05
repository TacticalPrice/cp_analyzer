const axios = require('axios');
const Profile = require('../models/profile');

const getProfileData = async (req ,res) => {
    const {handle} = req.params;

    try{
        const existingProfile = await Profile.findOne({handle});
        if(existingProfile){
            return res.json(existingProfile);
        }

        const profileResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        const ratingResponse = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);

        if(profileResponse.data.status == 'FAILED' || ratingResponse.data.status == 'FAILED')
        {
            return res.status(404).json({message : 'User not found'});
        }

        const profileData = profileResponse.data.result[0];
        const ratingData = ratingResponse.data.result;

        const newProfile = new Profile({
            handle : profileData.handle,
            rank : profileData.rank,
            rating : profileData.rating,
            avatar : profileData.avatar,
            ratingHistory : ratingData.map(entry => ({
                contestName : entry.contestName,
                newRating : entry.newRating,
                rank : entry.rank,
                data : new Date(entry.ratingUpdateTimeSeconds * 1000),
            }))
        });

        await newProfile.save();
        res.json(newProfile);
    }catch(e)
    {
        res.status(500).json({message : 'Error fetching data'});
    }
};

module.exports = {getProfileData};