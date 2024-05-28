// form component

const Form = () => {
  return (
    <form>
        <label htmlFor="top-text">Top text</label>
        <input type="text" id="top-text"></input>
        <label htmlFor="bottom-text">Bottom text</label>
        <input type="text" id="bottom-text"></input>
        <input type="submit"></input>
    </form>
  )
}

export default Form