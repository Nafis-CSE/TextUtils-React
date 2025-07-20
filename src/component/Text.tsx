import React, {useState} from 'react'
type TextProps ={
  heading :string;
  setAlert: (alert: { type: string; msg: string }) => void;
  text: string;
  setText: (text: string) => void;
}

export default function Text({ heading,setAlert,text,setText}: TextProps) {
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
  const copy = ()=>{
    navigator.clipboard.writeText(text);
    setAlert({ type: 'success', msg: 'Text copied to clipboard!' });
  }
  const handleOnchange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setText(event.target.value)
  }

  return (
    <>
    <div className='container'>
      <h1>{heading}</h1>
<div className="mb-3">
 <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnchange} rows={8}></textarea>
</div>
<button className="btn btn-info mx-2" onClick={handleUpclick}>Convert to upperCase</button>
<button className="btn btn-info mx-2" onClick={handledownclick}>Convert to lowerCase</button>
<button className="btn btn-danger mx-2" onClick={clear}>Clear</button>
<button className="btn btn-success mx-2" onClick={copy}>Copy</button>
    </div>

    <div className="container my-5">
      <h1>Text Summery</h1>
   <p>{text.trim().split(/\s+/).filter(Boolean).length} words & {text.length} characters </p>
      <h2>Preview</h2>
      <p><b>{text}</b></p>
    </div>
    </>
  )
}
