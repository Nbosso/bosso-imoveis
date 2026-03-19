import { createBrowserRouter } from 'react-router';
import { RootLayout } from './pages/RootLayout';
import { HomePage } from './pages/HomePage';
import { PropertyListingPage } from './pages/PropertyListingPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'imoveis', Component: PropertyListingPage },
      { path: 'imovel/:slug', Component: PropertyDetailPage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:slug', Component: BlogPostPage },
      { path: 'favoritos', Component: FavoritesPage },
      { path: 'sobre', Component: AboutPage },
      { path: 'servicos', Component: ServicesPage },
      { path: 'servicos/:slug', Component: ServiceDetailPage },
      { path: 'contato', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
