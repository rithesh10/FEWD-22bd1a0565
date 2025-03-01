// import logo from './logo.svg';
// import './App.css';
 var name="Rithesh";
function App(props) {
  return (    
    <div className="App">
      <h3> This is {name} </h3>
      <h2>Welcome to {props.name} college</h2>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
}
function handleClick()
{
  alert("Welcome to CSE Dept");
}

export default App;
