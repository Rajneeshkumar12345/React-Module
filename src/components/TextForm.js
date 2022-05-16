    import React, {useState} from "react";

    export default function TextForm(props) {
      const[text, setText] = useState("Enter your text")
      //setText("My name is Rajneeesh kumar");
      const handleUpClick=() => {
        console.log("Upper case was Clicked");
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert(": Converted to UpperCase!", "Success")
      }
      const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(": Converted to LowerCase!", "Success")
      }
      const handleOnChange=(event) => {
        console.log("Handle Change");
        setText(event.target.value);
      }
        // Credits: A
        const handleCopy = () => {
          console.log("I am copy");
          var text = document.getElementById("mybox");
          text.select();
          text.setSelectionRange(0, 9999);
          navigator.clipboard.writeText(text.value);
          props.showAlert(": Copied the clipboard!", "Success")
      }
      const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert(": Text Cleared!", "Success")
    }
        // Credits: Coding Wala
        const handleExtraSpaces = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(""));
          props.showAlert(":  Extra spaces removed!", "Success")
      }

      return (
      <> 
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1> {props.headings}</h1>
      <div className="mb-3">
      <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  id="mybox" rows="5"></textarea>
      </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Test Your Summery</h2>
        <p>{text.split(" ").filter((element) =>{return element.length !== 0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split("").filter((element) =>{return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
      

      );
    }//
