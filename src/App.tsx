import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Electronics from './Pages/Electronics'
import MenWearables from './Pages/NewWearables'
import LadiesWearables from './Pages/LadiesWearables'
import Edit from './Pages/Edit'
const router = createBrowserRouter([{
  path:"/",
  element:(
    <>
    <Home/>
    </>
  )
},
{
 path:"/Ladieswears",
  element:(
    <>
    <LadiesWearables/>
    </>
  )
},
{
 path:"/wearables",
  element:(
    <>
    <MenWearables/>
    </>
  )
},
{
 path:"/electronics",
  element:(
    <>
    <Electronics/>
    </>
  )
},
{
    path:"/edit",
  element:(
    <>
    <Edit/>
    </>
  )
}])
function App() {
 

  return (
    <>
     < RouterProvider router={router}/>
    </>
  )
}

export default App
