import './App.css';
import Game from './Game';

function App() {
  window.onbeforeunload = function () {
    return 'Data will be lost if you leave the page, are you sure?';
  };
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
