import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {

  let routes = createBrowserRouter[{
    path:'', element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/about' , element:<A}

      
    ]
  }]
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
