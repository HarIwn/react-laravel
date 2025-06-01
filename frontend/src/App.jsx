import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Register from './pages/Auth/register';
import Login from './pages/Auth/login';
import { useContext } from 'react';
import { AppContext } from './pages/Context/AppContext';
import Create from './pages/post/create';
import Show from './pages/post/Show';
import Update from './pages/post/Update';


export default function App() {
  const {user} = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={ user? <Home /> : <Register />} />
          <Route path='/login' element={ user? <Home /> : <Login />} />

          <Route path='/create' element={ user? <Create /> : <Login />} />

          <Route path='/post/:id' element={<Show />} />
          <Route path='/post/update/:id' element={ user? <Update /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
