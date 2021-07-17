import Data from "./data/Data.js"
import {GIF, H1} from  "./data/Gif.js"

function App() {
  return (
    <div className="App">
      <H1 title={Data.title}></H1>
        <form id="container">
            <div>
              <input type="search" id="search-bar" name="search-bar" placeholder="Search..."/>
              <input type="submit"/>
              {Data.map((value, i) =>{
                  return(
                    value.rating === "g" &&(
                  <GIF url={value.url} title={value.title} key={i} />)
                  )})}
            </div> 
      </form>
    </div>
  );
}



export default App;
