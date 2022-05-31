import { Route } from 'react-router-dom';
import './App.scss';
import Popular from './pages/Popular/Popular';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Route path="/home-page">
        <HomePage />
      </Route>
      <Route path="/popular">
        <Popular />
      </Route>
    </div>
  );
}
export default App;
