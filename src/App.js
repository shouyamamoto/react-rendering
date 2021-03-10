import React, {useState} from 'react'
import './App.css';

function App() {
  const [ num, setNum ] = useState(0)

  const onClickCountUp = () => {
    setNum(num + 1)
  }
  return (
    <div className="App">
      <p>{num}</p>
      <button onClick={onClickCountUp}>CountUp</button>
    </div>
  );
}

export default App;
