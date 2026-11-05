import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"

import { store } from './store/store.js'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Cherker from './components/Authlayout.jsx'
import Home from './pages/Home.jsx'
import SIgnupp from './pages/SIgnup.jsx'
import Loginn from './pages/Login.jsx'

import Post from './pages/Post.jsx'
import Addpost from './pages/Addpost.jsx'
import Editpost from './pages/Editpost.jsx'
import Allpost from './pages/Allpost.jsx'
import Showing from './pages/showing.jsx'


const render = createBrowserRouter([{
  path : "/",
  element : <App/>,
  children : [
    
    {
    path : "/",
    element : 
      <Home/>
    
  }, 

    {
    path : "/signup",
    element : <Cherker authentication={false}>
      <SIgnupp/>
    </Cherker>
  }, 

    {
    path : "/login",
    element : <Cherker authentication={false}>
      <Loginn/>
    </Cherker>
  }, 
  {
path : "/show",
element : <Cherker authentication>
<Showing/>
</Cherker>
  },

    {
    path : "/ad-post",
    element : <Cherker authentication>
      <Addpost/>
    </Cherker>
  }, 

    {
    path : "/post/:slug",
    element : <Cherker authentication>
      <Post/>
    </Cherker>
  }, 
  
    {
    path : "/edit/:slug",
    element : <Cherker authentication>
      <Editpost/>
    </Cherker>
  }, 
{
   path : "/allpost",
    element : <Cherker authentication>
      <Allpost/>
    </Cherker>
  }



]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
 <RouterProvider  router={render}/>
</Provider>
   
  </StrictMode>,
)
