import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'element={<h1>Products Component</h1>}/> 
        <Route path='/add'element={<h1>Add Products Component</h1>}/> 
        <Route path='/update'element={<h1>Update Component</h1>}/> 
        <Route path='/logout'element={<h1>Logout Component</h1>}/> 
        <Route path='/profile'element={<h1>Profile Component</h1>}/> 
        <Route path='/signUp'element={<SignUp/>}/> 



      </Routes>

      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
