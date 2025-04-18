import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Home},
      { path: "about", Component: About },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
