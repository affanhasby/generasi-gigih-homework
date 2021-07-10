alertFunction = () =>{
    alert("Good!");
  }

axios
  .get(
    "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json", {}
    )
  .then(function(response) {
    console.log(response.data);

    document.getElementById('gambar').src= response.data.album.images[0].url;

    const trackTitleDOM = document.getElementById('judul')
    trackTitleDOM.innerHTML = `Title : ${response.data.name}`

    const artisDOM = document.getElementById('artis')
    artisDOM.innerHTML = `Artist : ${response.data.artists[0].name}`

    const albumDOM = document.getElementById('album')
    albumDOM.innerHTML = `Album : ${response.data.name}`
  })
  .catch(err => alert("Aduhh!"));