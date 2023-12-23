import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import RecipeDetail from './Components/RecipeDetails';
import './App.css';

function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;