import React , { useState } from 'react';
import ProfileForm from './components/profileform';
import Profile from './components/profile';
import './App.css';


function App(){
  const [profile , setProfile] = useState(null);

  return (
    <div className='App'>
      <h1>CodeForces Profile Analyzer</h1>
      <ProfileForm setProfile={setProfile}/>
      {profile && <Profile profile={profile}/>}
    </div>
  );
}

export default App;

