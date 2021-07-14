import './App.css';
import './data';
import data from './data';

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
        <img id="track-img" src={data.album.images[0].url} alt="Album" width=""/>
        <p id="judul">{data.name}</p>
        <p id="artis">{data.artists[0].name}</p>
        <p id="album">{data.album.name}</p>
        <button>Select</button>
      </div>
    </div>
  );
}
<script src="https://unpkg.com/axios/dist/axios.min.js"/>

export default App;
