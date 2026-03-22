
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import States from './pages/States'
import NuclearPower from './pages/nuclearPower'
import Natural from './pages/natural'
import Navbar from './components/navbar'
import Parks from './pages/parks'
import Producer from './pages/producer'
import Rocks from './pages/rocks'
import Geo from './pages/Geo'
import WCapital from './pages/world/capitals'
import WProducer from './pages/world/producer'
import WNatural from './pages/world/natural'
import PolList from './pages/polity/list'
import Currency from './pages/world/currency'
import Equipment from './pages/military/equipment'
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
    },{
      path:'/natural',
      element:<>
      <Natural></Natural>
      </>
    },{
      path:'/rocks',
      element:<>
      <Rocks></Rocks>
      </>
    },{
      path:'/Geo',
      element:<>
      <Geo></Geo>
      </>
    },{
      path:'/world/producer',
      element:<>
      <WProducer></WProducer>
      </>
    },{
      path:'/world/capitals',
      element:<>
      <WCapital></WCapital>
      </>
    },{
      path:'/world/natural',
      element:<>
      <WNatural></WNatural>
      </>
    },{
      path:'/polity',
      element:<>
      <PolList></PolList>
      </>
    },{
      path:'/world/currency',
      element:<>
      <Currency></Currency>
      </>
    },{
      path:'/military/equipment',
      element:<>
      <Equipment></Equipment>
      </>
    }
  ])
 

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;