import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';

function App() {

  let routes = createBrowserRouter[{
    element:<Layout/> , children:[
      {
        
      }
    ]
  }]
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
