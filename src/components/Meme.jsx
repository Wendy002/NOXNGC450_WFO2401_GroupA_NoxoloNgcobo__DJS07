//Meme component
import memeData from "../../memeData.js"
function Meme() {

  /** 
   * wrap with div element to make the button independent to prevent page
   * reload everytime you click the buttton
  */

  function getMemeImage(){
    const memeArray = memeData.data.memes;   // get the memes array from object
    const randomMemeIndex = Math.floor(Math.random() * memeArray.length); // get randome index
    const memeImage = memeArray[randomMemeIndex]["url"]; //get random meme image

  }
  return (
    <main>

      <div className="form">
          <label>Top text
            <input type="text" id="top-text" className="form--input" placeholder="Shut up"></input>
          </label>
          
          <label>Bottom text
            <input type="text" id="bottom-text" className="form--input"  placeholder="and take my money"></input>
          </label>
          
          <button type="submit" className="form--button" onClick={getMemeImage}> Get a new meme image 🖼️</button>
      </div>
      <img />

    </main>
  )
}

export default Meme