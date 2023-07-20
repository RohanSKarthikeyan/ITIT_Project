import './App.css';
import Header from './Header';
import Login from './Login';
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <Routes>
                <Route exact path="/" element={<Header/>} />
                <Route exact path="/login" element={<Login/>} />
     </Routes>           
    </div>
    </BrowserRouter>
  );
}

export default App;
