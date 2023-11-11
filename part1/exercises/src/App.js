import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';

function App() {
  return (
    <div className="App">
      <MovieList />
      <div className="similarComponents">
     <ChoresList />
      <BookList />
      <HobbyLinks />
    </div>
    </div>
  );
}

export default App;
