import logo from './logo.svg';
import './App.css';
import EpisodesList from './components/EpisodesList';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <h1>Watchlist</h1>
      <Watchlist></Watchlist>
      <EpisodesList></EpisodesList>
    </div>
  );
}

export default App;
