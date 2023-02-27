import { useState } from 'react';
import './App.css';
import SkinAvatar from './components/SkinAvatar';
import SkinBody from './components/SkinBody';
import SkinCape from './components/SkinCape';
import SkinHead from './components/SkinHead';
import SkinPlain from './components/SkinPlain';

function App() {
  const [idToSearch, updateIdToSearch] = useState('');
  const [uuid, setUuid] = useState();
  const [isValidUrl, setValidUrl] = useState();

  const testValidUUID = async (uuid) => {
    const RESPONSE = await fetch('https://crafatar.com/avatars/' + uuid);
    return RESPONSE.status === 200 ? true : false;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    setUuid(idToSearch);
    const isUUIDValid = await testValidUUID(idToSearch);
    if(!isUUIDValid){
      setValidUrl(false);
      return;
    }
    setValidUrl(true);
    updateIdToSearch('');
  }

  return (
    <div className="App">
      <div className='appInfo'>
        <h1>Minecraft Skin by UUID</h1>
        <p>Search a minecraft user by his UUID (found it <a href='https://minecraftuuid.com/'>here</a>)</p>
      </div>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder='Enter a UUID' 
          value={idToSearch} 
          onChange={(e) => {updateIdToSearch(e.target.value)}}
          className='searchInput'
        />
        <button className='searchBtn'>0</button>
      </form>
      {uuid ? <h2>Results for <strong>{uuid}</strong></h2> : ''}
      {
        uuid ?  
          isValidUrl ? 
            <div className='skinInfoDiv'>
              <SkinAvatar uuid={uuid}/>
              <SkinHead uuid={uuid}/>
              <SkinBody uuid={uuid}/>
              <SkinPlain uuid={uuid}/>
              <SkinCape uuid={uuid}/>
            </div> :
            <p className='errorMessage'>Invalid UUID</p> :
        ''
      }
      
    </div>
  );
}

export default App;
