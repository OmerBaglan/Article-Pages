import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import CreateArticle from './Components/CreateArticle';
import UserArticle from './Components/UserArticle';
import Article from './Components/Article';
import Articles from './Components/Articles';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/:userid/dashboard' element={<Dashboard/>}></Route>
        <Route path='/:userid/createarticle' element={<CreateArticle/>}></Route>
        <Route path='/:userid/userarticles' element={<UserArticle/>}></Route>
        <Route path='/:id/article' element={<Article/>}></Route>
        <Route path='/articles' element={<Articles/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
