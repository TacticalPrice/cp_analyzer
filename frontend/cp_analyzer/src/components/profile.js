import React from 'react'

function Profile({profile}){
    return (
        <div classroom="profile">
            <img src={profile.avatar} alt={`${profile.handle}'s avatar`}/>
            <h2>{profile.handle}</h2>
            <p>Rank: {profile.rank}</p>
            <p>Rating: {profile.raring}</p>
            <h3>Rating History</h3>
            <ul>
                {profile.ratingHistory.map((entry,index) => (
                    <li key = {index}>
                        {entry.date.toString()}: {entry.contestName} - {entry.newRating} (Rank : {entry.rank})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;