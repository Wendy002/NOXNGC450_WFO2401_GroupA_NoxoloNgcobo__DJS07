//Meme component

function Meme() {
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