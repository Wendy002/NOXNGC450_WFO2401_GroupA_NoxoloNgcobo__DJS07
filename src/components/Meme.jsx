//Meme component
import React from "react"
import memeData from "../../memeData.js"

function Meme() {

  /** 
   * wrap with div element to make the button independent to prevent page
   * reload everytime you click the buttton
   * 
   * use state to create and set meme image
   * then add nameImage to the img element 
   * onclick , the function getMemeImage will generate new image 
   * updates the state which changes the displayed image to another
  */
  // const  [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");    // create image state , insert placeholder image
  // Update state to save the meme-related info

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',                                            // initialize state object
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMemeImage(){
    const memeArray = allMemeImages.data.memes;   // get the memes array from object
    const randomMemeIndex = Math.floor(Math.random() * memeArray.length); // get randome index
    const url = memeArray[randomMemeIndex].url; //get random meme image
    setMeme(prevMeme => ({
      ...prevMeme,                   //access the previous meme
      randomImage: url
  }))

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
      <div className="meme">
          <img src= {meme.randomImage} className="meme--image"/> 
      </div>
      

    </main>
  )
}

export default Meme