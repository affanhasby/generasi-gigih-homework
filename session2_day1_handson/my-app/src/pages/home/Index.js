const image = <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"></img>
function Index() {
    return (
      <div>
        <form>
          <input type="text"/>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {image}
        </div>
      </div>
    );
  }
  
  export default Index;
  