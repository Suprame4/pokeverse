import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { PokemonDetail} from './routes/PokemonDetail'
import { FavoritesProvider} from './FavoritesProvider'
import Favorites from './routes/Favorites'

function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/:name", element: <PokemonDetail/> },
    { path: "/favorites", element: <Favorites/>}
  ])
  
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export { App };
