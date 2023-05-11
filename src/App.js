import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { PokemonDetail} from './routes/PokemonDetail'

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/:name", element: <PokemonDetail/> }
  ])
  
  return (
    <RouterProvider router={router} />
  );
}

export { App };
