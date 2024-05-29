//Meme component

function Meme() {
  return (
    <>
     <form className="form">
        <label htmlFor="top-text">Top text</label>
        <input type="text" id="top-text" className="form--input" placeholder="Top text"></input>
        <label htmlFor="bottom-text">Bottom text</label>
        <input type="text" id="bottom-text" className="form--input"  placeholder="Bottom text"></input>
        <button type="submit" className="form--button"> Get a new meme image 🖼️</button>
    </form>
    <img />

    </>
  )
}

export default Meme