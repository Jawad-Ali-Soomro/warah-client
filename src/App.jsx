import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import i18n from './i18n'

// Component to check localStorage and redirect
const AppRouter = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Only check if we're on the root path
    if (location.pathname === '/') {
      const savedLocation = localStorage.getItem('location')
      const savedLanguage = localStorage.getItem('language')

      // If both keys exist, navigate to home and set language
      if (savedLocation && savedLanguage) {
        // Set the language from localStorage
        i18n.changeLanguage(savedLanguage)
        // Navigate to home
        navigate('/home', { replace: true })
      }
    }
  }, [navigate, location.pathname])

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
