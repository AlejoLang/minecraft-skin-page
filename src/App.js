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

  const handleSearch = async (e) => {
    e.preventDefault();
    setUuid(idToSearch);
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
      <SkinAvatar uuid={uuid}/>
      <SkinHead uuid={uuid}/>
      <SkinBody uuid={uuid}/>
      <SkinPlain uuid={uuid}/>
      <SkinCape uuid={uuid}/>
    </div>
  );
}

export default App;
