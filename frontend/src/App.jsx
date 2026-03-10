
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import States from './pages/States'
import NuclearPower from './pages/nuclearPower'
import Navbar from './components/navbar'
import Parks from './pages/parks'
import Producer from './pages/producer'

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<>
      <Home></Home>
      </>
    },{
      path:'/states',
      element:<>
      <States></States>
      </> 
    },{
      path:'/nuclear', 
      element:<>
      <NuclearPower></NuclearPower>
      </>
    },{
      path:'/parks',
      element:<>
      <Parks></Parks>
      </>
    },{
      path:'/producer',
      element:<>
      <Producer></Producer>
      </>
    }
  ])
 

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;