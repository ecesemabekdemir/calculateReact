import './App.css'

function App() {

  return (
<>
<div class="tema1">
  <div class="container">
   <Header/>
   <Screen/>
   <KeyBox />
  </div>
</div>
</>
  )
}

function Header() {

  return(
    <div className="header">
    <h3>calc</h3>
    <div className="theme">
      <button></button>
    </div>
  </div>
  )
}

function Screen() {
  return(
    <div className="screen">
    <h2></h2>
  </div>
  )
}

function KeyBox() {
  return(
    <div className="keyboardBox">
    <div className="keyboard">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="del">DEL</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button>/</button>
      <button>x</button>
      <button className="reset">RESET</button>
      <button className="equal">=</button>
    </div>
    <div className="buttons">
    </div>
  </div>
  )
}
export default App
