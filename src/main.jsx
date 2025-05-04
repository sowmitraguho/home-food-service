import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
//import { Component } from 'react'
import ContactUs from './Components/ContactUs/ContactUs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch('corevalues.json'),
        Component: Home
      },
      { path: "about", Component: About },
      {path: "signin", Component: SignIn},
      {path: "signup", Component: SignUp},
      {path: 'contact', Component: ContactUs}

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
