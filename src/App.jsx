import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'
import HowToBuyPage from './pages/HowToBuyPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import DeliveryPage from './pages/DeliveryPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <Header />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kategoria/:slug" element={<CategoryPage />} />
          <Route path="/produkt/:slug" element={<ProductPage />} />
          <Route path="/kosik" element={<CheckoutPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/ako-nakupovat" element={<HowToBuyPage />} />
          <Route path="/obchodne-podmienky" element={<TermsPage />} />
          <Route path="/ochrana-udajov" element={<PrivacyPage />} />
          <Route path="/doprava" element={<DeliveryPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/cookies" element={<Navigate to="/ochrana-udajov#cookies" replace />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </CartProvider>
  )
}
