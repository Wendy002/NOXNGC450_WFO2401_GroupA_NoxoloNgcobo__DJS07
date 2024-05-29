//Meme component

function Meme() {
  return (
    <main>
      <form className="form">
          <label htmlFor="top-text">Top text
            <input type="text" id="top-text" className="form--input" placeholder="Shut up"></input>
          </label>
          
          <label htmlFor="bottom-text">Bottom text
            <input type="text" id="bottom-text" className="form--input"  placeholder="and take my money"></input>
          </label>
          
          <button type="submit" className="form--button"> Get a new meme image 🖼️</button>
      </form>
      <img />

    </main>
  )
}

export default Meme