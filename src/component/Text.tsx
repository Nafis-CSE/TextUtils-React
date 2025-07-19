import React, {useState} from 'react'
type TextProps ={
  heading :string;
  isChecked: boolean;
  setAlert: (alert: { type: string; msg: string }) => void;
}

export default function Text({ heading ,isChecked,setAlert}: TextProps) {
  const handleUpclick = ()=>{
    let newText = text.toUpperCase();
    setText (newText);
    setAlert({ type: 'success', msg: 'Text converted to upper case!' });
  }
  const handledownclick = ()=>{
    let newText = text.toLowerCase();
    setText (newText);
    setAlert({ type: 'info', msg: 'Text converted to lower case!' });
  }
  const clear = ()=>{
    setText ("");
    setAlert({ type: 'warning', msg: 'Text cleared!' });
  }
  const handleOnchange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setText(event.target.value)
  }
const [text,setText] = useState('')
  return (
    <>
    <div className='container'>
      <h1>{heading}</h1>
<div className="mb-3">
 <textarea className="form-control" style={isChecked ? 
  { backgroundColor: '#c0c8d831', color: 'white' } : { backgroundColor: '#aed9e6ff', color: 'black' }} 
  id="exampleFormControlTextarea1" value={text} onChange={handleOnchange} rows={8}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}>convert to upperCase</button>
<button className="btn btn-primary mx-2" onClick={handledownclick}>convert to lowerCase</button>
<button className="btn btn-primary mx-2" onClick={clear}>clear</button>
    </div>

    <div className="container my-5">
      <h1>Text Summery</h1>
      <p>{text.split(" ").length} words & {text.length} characters </p>
      <h2>Preview</h2>
      <p><b>{text}</b></p>
    </div>
    </>
  )
}
