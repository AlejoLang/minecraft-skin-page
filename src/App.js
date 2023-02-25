import { useState } from 'react';
import './App.css';

function App() {
  const [idToSearch, updateIdToSearch] = useState('');
  const [uuid, setUuid] = useState();

  const handleSearch = async (e) => {
    e.preventDefault();
    setUuid(idToSearch);
  }

  return (
    <div className="App">
      <h1>Minecraft Skin by UUID</h1>
      <p>Search a minecraft user by his UUID (found it <a href='https://minecraftuuid.com/'>here</a>)</p>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Enter a UUID' value={idToSearch} onChange={(e) => {updateIdToSearch(e.target.value)}}/>
        <button>0</button>
      </form>
      {uuid ? <h2>Results for {uuid}</h2> : ''}
      
    </div>
  );
}

export default App;
