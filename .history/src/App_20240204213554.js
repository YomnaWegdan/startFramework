import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';

function App() {

  let routes = createBrowserRouter[{
    path:'', element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/about' , element:<About/>}

      
    ]
  }]
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
