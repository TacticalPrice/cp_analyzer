import React , { useState } from 'react';
import axios from 'axios';

function ProfileForm({ setProfile }) {
    const [handle ,setHandle] = useState('');

    const fetchProfile =  async (event) => {
        event.preventDefault();
        try{

            const response = await axios.get(`http://localhost:5001/api/profile/${handle}`);
            setProfile(response.data);
        }catch(e){
            console.error('Error fetching profile:', e);
            alert('Error fetching profile. Please check the handle.');
        }
    };

    return (
        <form onSubmit={fetchProfile}>
            <input
             type ="text"
             value={handle}
             onChange={(e) => setHandle(e.target.value)}
             placeholder='Enter Codeforces handle'
             required
            />
            <button type="submit">Get Profile</button>
        </form>
    );
}

export default ProfileForm;