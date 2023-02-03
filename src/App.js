import './App.css';
import { useToggle } from "./useToggle";

function App()
{
  const [isVisiable, toggle] = useToggle();
  const [isVisiable2, toggle2] = useToggle();

  
  return (
    <div className="App">
      <button onClick={toggle}>{isVisiable ? "Hide" : "Show"}</button>

      {isVisiable && <h1>Hidden text</h1>}

      <button onClick={toggle2}>{isVisiable2 ? "Hide" : "Show"}</button>

      {isVisiable2 && <h1>Hidden text</h1>}
    </div>
  );
}

export default App;
