import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Electronics from './Pages/Electronics'
import MenWearables from './Pages/NewWearables'
import LadiesWearables from './Pages/LadiesWearables'
import Edit from './Pages/Edit'
import Solo from './Pages/solo'


const router = createBrowserRouter([{
  path:"/",
  element:(
    <>
    <Home/>
    </>
  )
},
{
  path:"/:id",
  element:(
    <>
    <Solo/>
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
  path:"/Ladieswears/:id",
  element:(
    <>
    <Solo/>
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
  path:"/wearables/:id",
  element:(
    <>
    <Solo/>
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
  path:"/electronics/:id",
  element:(
    <>
    <Solo/>
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
},
])
function App() {
 

  return (
    <>
     < RouterProvider router={router}/>
    </>
  )
}

export default App
