
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import States from './pages/States'
import NuclearPower from './pages/nuclearPower'
import Navbar from './components/navbar'

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
      path:'/nu', 
      element:<>
      <NuclearPower></NuclearPower>
      </>
    }
  ])
 

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;