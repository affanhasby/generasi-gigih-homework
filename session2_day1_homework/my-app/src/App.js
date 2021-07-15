import './App.css';
import './data';
import data from './data';
import Image from './component/Image.js';
import Album from './component/Album.js';
import Artis from './component/Artis.js';
import Judul from './component/Judul.js';
import Button from './component/Button.js';

function App() {
  console.log(data)
  return (
    <div>
      <div id="menu">
        <h1>Create Playlist</h1>
        <form>
            <label for="title">Title :</label><br/>
            <input type="text"/><br/>
            <label for="desc">Description :</label><br/>
            <input type="desc"/><br/>
            <input type="submit" value="Submit" onclick="alertFunction()"/>
        </form>
      </div>
      <div id="playlist">
        <Image src={data.album.images[0].url}/>
        <Judul judul={data.name}/>
        <Artis artis={data.album.name}/>
        <Album album={data.album.name}/>
        <Button/>
      </div>
    </div>
  );
}
<script src="https://unpkg.com/axios/dist/axios.min.js"/>

export default App;
