import { HashRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import CategoryPage from './pages/CategoryPage'

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
        </Routes>
        <Footer />
      </HashRouter>
    </CartProvider>
  )
}
