//Meme component

function Meme() {
  return (
    <>
     <form className="form">
        <label htmlFor="top-text">Top text</label>
        <input type="text" id="top-text" className="form--input"></input>
        <label htmlFor="bottom-text">Bottom text</label>
        <input type="text" id="bottom-text" className="form--input"></input>
        <input type="submit" className="form--button"></input>
    </form>
    <img />

    </>
  )
}

export default Meme