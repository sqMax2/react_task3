import './App.css';
import { useHover } from './useHover';

function Demo() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Demo/>
        </div>
      </header>
    </div>
  );
}

export default App;
