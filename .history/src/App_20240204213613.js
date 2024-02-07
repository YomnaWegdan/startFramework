import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  let routes = createBrowserRouter[{
    path:'', element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/about' , element:<About/>},
      {path:'/contact' , element:<Contact/>},


      
    ]
  }]
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
