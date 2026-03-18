import { RouterProvider } from 'react-router';
import { FavoritesProvider } from './context/FavoritesContext';
import { router } from './routes';

export default function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}
