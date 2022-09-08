import Heading from './components/Heading/Heading';
import Main from './components/Main/Main';
import './App.scss';
import team from './assets/data/team';

function App() {
  return (
    <div className="app">
      <Heading/>
      <Main  teamArr = {team}/>
    </div>
  );
}

export default App;
