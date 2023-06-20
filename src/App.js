import Body from './components/Body';
import Error from './components/Error';
import About from './components/About'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantContainer from './components/RestaurantContainer';

import RestaurantDetails from './components/RestaurantDetails';

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<RestaurantContainer/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetails/>,
      },
    ]
  },
]) 

function App() {
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  );
}


export default App;
