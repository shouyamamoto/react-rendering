import React, {useState} from 'react'
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
  const [ text, setText ] = useState('')
  const [ open, setOpen ] = useState(false)

  const onChangeText = (event) => {setText(event.target.value)}
  const onClickOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <input placeholder="文字を入力" value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  );
}

export default App;
