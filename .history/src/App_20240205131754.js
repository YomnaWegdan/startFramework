import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Portfolio from './Components/Portfolio';

function App() {

  let routes = createBrowserRouter([{
    path:'', element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/about' , element:<About/>},
      {path:'/Portfolio' , element:<Portfolio/>},
      {path:'/contact' , element:<Contact/>},
      {path:'*' , element:<Error/>},



      
    ]
  }])
  return (
    <div className="App">
    <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
