import "./App.css";
import {useState} from "react"

function App() {

  const [ greeting, setGreeting ] = useState("Greeting Message")

  const setThaiGreeting = () => {
    setGreeting('สวัสดี!')
  }
  const setEngGreeting = () => {
    setGreeting('Hi!')
  }
  const setChineseGreeting = () => {
    setGreeting('你好!')
  }


  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={setThaiGreeting}>สวัสดี!</button>
        <button onClick={setEngGreeting}>Hi!</button>
        <button onClick={setChineseGreeting}>你好!</button>
      </div>
    </div>
  );
}

export default App;
