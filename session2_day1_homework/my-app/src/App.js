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
      {data.map((data) =>{
        return(
          <div id="playlist">
          <Image src={data.album.images[0].url}/>
          <Judul judul={data.name}/>
          <Artis artis={data.album.name}/>
          <Album album={data.album.name}/>
          <Button/>
        </div>
        )
      }
      )}
    </div>
  );
}
<script src="https://unpkg.com/axios/dist/axios.min.js"/>

export default App;
