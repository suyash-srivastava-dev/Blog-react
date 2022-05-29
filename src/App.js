import React from 'react';
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Home  from './components/home';
import Nav from './components/nav';
import Footer from './components/footer';
import CreatePost from './components/createPost';
import Show from './components/show';
import EditPost from './components/editPost';
import Login from './components/login';


function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        <Nav/>
        <Route path="/" component={Home} exact />
        <Route path="/create" component={CreatePost} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/show/:id" component={Show} /> 
        <Route path="/edit/:id" component={EditPost} /> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
  
}
// function requireAuth(nextState, replaceState) {
//   if (!auth.loggedIn())
//     replaceState({ nextPathname: nextState.location.pathname }, '/login')
// }
export default App;
